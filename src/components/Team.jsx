const advisors = [
  { img: '/images/staffadvisor.jpg', name: 'Dr. V. G. Kalpana', role: 'Staff Advisor' },
  { img: '/images/Murugan.jpg', name: 'Dr. M. Murugan', role: 'Staff Advisor' },
  { img: '/images/Vasanthan.jpg', name: 'Mr. B. Vasanthan', role: 'Staff Advisor' },
]

const chairman = [
  { img: '/images/sachin.png', name: 'Sachin J', roles: ['Event Chairman', 'Treasurer'] },
]

const secretaries = [
  { img: '/images/sk.jpeg', name: 'Shanthosh Kumar S', role: 'Secretary' },
  { img: '/images/ar.png', name: 'Akshatha Rupa B', role: 'Secretary' },
]

const coords1 = [
  { img: '/images/kawin.png', name: 'Kawin Raj PG', role: 'Event Coordinator' },
  { img: '/images/DB.png', name: 'Dhivyaabharathi S', role: 'Event Coordinator' },
]

const coords2 = [
  { img: '/images/Shuriya.png', name: 'Shuriya T', role: 'Event Coordinator' },
  { img: '/images/nandhini.png', name: 'Nandhini V', role: 'Event Coordinator' },
  { img: '/images/ilakkia.png', name: 'Ilakkia T', role: 'Event Coordinator' },
  { img: '/images/sangeeth.png', name: 'Sangeeth Manoj Kumar R', role: 'Event Coordinator' },
]

function MemberCard({ img, name, roles }) {
  const roleList = roles || []
  return (
    <div
      className="relative text-center rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer hover:-translate-y-2.5 hover:scale-105"
      style={{
        width: 250,
        background: 'linear-gradient(135deg, rgba(125,76,255,0.1), rgba(125,76,255,0.05))',
        border: '2px solid rgba(125,76,255,0.3)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 15px 40px rgba(125,76,255,0.4)'
        e.currentTarget.style.borderColor = '#d4af37'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
        e.currentTarget.style.borderColor = 'rgba(125,76,255,0.3)'
      }}
    >
      <img
        src={img}
        alt={name}
        className="w-full object-cover block transition-transform duration-300"
        style={{ height: 280, borderRadius: '18px 18px 0 0' }}
        onError={e => {
          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=1a0b2e&color=d4af37&size=280`
        }}
      />
      <div className="p-5 relative z-20">
        <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f5e9ff', margin: '0 0 8px', letterSpacing: 1 }}>{name}</h4>
        {roleList.map((r, i) => (
          <p key={i} style={{ fontSize: '0.85rem', color: '#b89fc5', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 500, margin: 0 }}>{r}</p>
        ))}
      </div>
      {/* Shine effect */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.1), transparent)', opacity: 0, transition: 'opacity 0.3s' }} />
    </div>
  )
}

function TeamRow({ members }) {
  return (
    <div className="flex justify-center items-center gap-16 flex-wrap w-full">
      {members.map((m, i) => (
        <MemberCard key={i} img={m.img} name={m.name} roles={m.roles || [m.role]} />
      ))}
    </div>
  )
}

export default function Team() {
  return (
    <section
      id="about-us"
      style={{
        padding: '120px 20px',
        background: 'linear-gradient(180deg, #1a0b2e, #0f0520)',
      }}
    >
      <h2
        className="text-center relative block w-full mb-16"
        style={{ fontFamily: 'Bebas Neue, sans-serif', color: '#d4af37', letterSpacing: 5, fontSize: '3rem' }}
      >
        TEAM LUMORA
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-0.5" style={{ background: 'linear-gradient(90deg, transparent, #d4af37, transparent)' }} />
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
        {/* Staff Advisors */}
        <div className="mb-10">
          <TeamRow members={advisors} />
        </div>

        {/* Chairman */}
        <TeamRow members={chairman} />

        {/* Secretaries */}
        <TeamRow members={secretaries} />

        {/* Coords row 1 */}
        <TeamRow members={coords1} />

        {/* Coords row 2 */}
        <TeamRow members={coords2} />
      </div>
    </section>
  )
}
