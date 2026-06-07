import Matter from 'matter-js'

// Setup audio context for sound effects
let audioCtx: AudioContext | null = null

function playThumpSound(velocity: number) {
  if (velocity < 1) return
  
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      audioCtx = new AudioContextClass()
    }
    
    if (audioCtx.state === 'suspended') {
      audioCtx.resume()
    }
    
    const osc = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()
    
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(100 + Math.random() * 50, audioCtx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.1)
    
    // Volume depends on impact velocity
    const vol = Math.min(velocity / 20, 0.4)
    gainNode.gain.setValueAtTime(vol, audioCtx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1)
    
    osc.connect(gainNode)
    gainNode.connect(audioCtx.destination)
    
    osc.start()
    osc.stop(audioCtx.currentTime + 0.1)
    } catch {
      // Fail silently if audio context is blocked
    }
}

// Matter.js Module Aliases
const Engine = Matter.Engine,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Events = Matter.Events

let engine: Matter.Engine | null = null
let runner: Matter.Runner | null = null
interface DomBodyItem {
  dom: HTMLElement
  body: Matter.Body
  width: number
  height: number
  origStyle: string
}
let domBodiesMap: DomBodyItem[] = []
let isPhysicsRunning = false

export function initPhysics() {
  if (isPhysicsRunning) return
  isPhysicsRunning = true

  // Create Engine
  engine = Engine.create()
  
  // Disable sleeping to keep elements interactive
  engine.enableSleeping = false

  const fallables = document.querySelectorAll('.fallable')
  
  // Calculate boundaries
  const width = window.innerWidth
  const height = window.innerHeight

  // Create bounds (walls, floor, ceiling)
  const wallOptions = { isStatic: true, friction: 0.8, restitution: 0.2 }
  const ground = Bodies.rectangle(width / 2, height + 50, width * 2, 100, wallOptions)
  const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOptions)
  const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOptions)
  const ceiling = Bodies.rectangle(width / 2, -100, width * 2, 100, wallOptions)

  Composite.add(engine!.world, [ground, leftWall, rightWall, ceiling])

  domBodiesMap = []

  // First pass: Calculate and create bodies
  fallables.forEach(node => {
    const el = node as HTMLElement
    // Only capture visible elements
    if (window.getComputedStyle(el).display === 'none') return
    
    const rect = el.getBoundingClientRect()
    
    // Store original inline style
    const origStyle = el.getAttribute('style') || ''
    
    // Create the body at the center of the bounding box
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2
    
    const body = Bodies.rectangle(x, y, rect.width, rect.height, {
      friction: 0.5,
      frictionAir: 0.01,
      restitution: 0.6,
      angle: 0
    })
    
    domBodiesMap.push({ dom: el, body: body, width: rect.width, height: rect.height, origStyle })
    Composite.add(engine!.world, body)
  })

  // Second pass: Apply absolute/fixed positioning to DOM
  domBodiesMap.forEach(item => {
    const el = item.dom
    el.classList.add('physics-bound')
    el.style.position = 'fixed'
    el.style.width = `${item.width}px`
    el.style.height = `${item.height}px`
    el.style.top = '0px'
    el.style.left = '0px'
    el.style.zIndex = '9999'
    el.style.margin = '0'
    // Initial sync
    el.style.transform = `translate(${item.body.position.x - item.width/2}px, ${item.body.position.y - item.height/2}px)`
  })

  // Setup Mouse Interaction
  const mouse = Mouse.create(document.body)
  const mouseConstraint = MouseConstraint.create(engine!, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: { visible: false } as Matter.IConstraintRenderDefinition
    }
  })
  Composite.add(engine!.world, mouseConstraint)

  // Sync DOM with physics world on every tick
  Events.on(engine!, 'afterUpdate', () => {
    domBodiesMap.forEach(item => {
      const pos = item.body.position
      const angle = item.body.angle
      // Apply translation and rotation
      item.dom.style.transform = `translate(${pos.x - item.width/2}px, ${pos.y - item.height/2}px) rotate(${angle}rad)`
    })
  })

  // Collision sounds
  Events.on(engine!, 'collisionStart', (event) => {
    const pairs = event.pairs
    for (let i = 0; i < pairs.length; i++) {
        const bodyA = pairs[i].bodyA
        const bodyB = pairs[i].bodyB
        const relSpeed = Math.abs(bodyA.speed - bodyB.speed)
        
        if (relSpeed > 2) {
            playThumpSound(relSpeed)
        }
    }
  })

  // Run the engine
  runner = Runner.create()
  Runner.run(runner, engine!)
  
  document.body.classList.add('physics-active')
}

export function resetPhysics() {
  if (!isPhysicsRunning) return
  isPhysicsRunning = false

  // Stop Engine
  if (runner) Runner.stop(runner)
  if (engine) Engine.clear(engine!)
  
  // Restore DOM
  domBodiesMap.forEach(item => {
    const el = item.dom
    el.classList.remove('physics-bound')
    if (item.origStyle) {
      el.setAttribute('style', item.origStyle)
    } else {
      el.removeAttribute('style')
    }
  })
  
  domBodiesMap = []
  document.body.classList.remove('physics-active')
}
