const staffAdvisors = [
  { name: 'Dr. V. G. Kalpana', role: 'Staff Advisor', img: '/images/staffadvisor.jpg' },
  { name: 'Dr. M. Murugan', role: 'Staff Advisor', img: '/images/Murugan.jpg' },
  { name: 'Mr. B. Vasanthan', role: 'Staff Advisor', img: '/images/Vasanthan.jpg' },
]
const chairman = { name: 'Sachin J', role: 'Event Chairman | Treasurer', img: '/images/sachin.png' }
const secretaries = [
  { name: 'Shanthosh Kumar S', role: 'Event Secretary', img: '/images/sk.jpeg' },
  { name: 'Akshatha Rupa B', role: 'Event Secretary', img: '/images/ar.png' },
]
const coordinators = [
  { name: 'Kawin M', role: 'Event Coordinator', img: '/images/kawin.png' },
  { name: 'Deva Bharathi P', role: 'Event Coordinator', img: '/images/DB.png' },
  { name: 'Shuriya V', role: 'Event Coordinator', img: '/images/Shuriya.png' },
  { name: 'Nandhini V', role: 'Event Coordinator', img: '/images/nandhini.png' },
  { name: 'Ilakkia P', role: 'Event Coordinator', img: '/images/ilakkia.png' },
  { name: 'Sangeeth Kumar', role: 'Event Coordinator', img: '/images/sangeeth.png' },
]

function TeamCard({ member }) {
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=1a0b2e&color=d4af37&size=280`
  return (
    <div className="team-card">
      <div className="team-img-wrap">
        <img src={member.img} alt={member.name} onError={e => e.target.src = fallback} />
      </div>
      <div className="team-card-content">
        <h4>{member.name}</h4>
        {member.role.split(' | ').map((r, i) => <p key={i}>{r}</p>)}
      </div>
    </div>
  )
}

export default function Team() {
  return (
    <>
      <style>{`
        #about-us {
          padding: 100px 20px;
          background: linear-gradient(180deg, #0f0a1f, #1a0b2e);
          position: relative; overflow: hidden;
        }
        .team-bg { position:absolute; inset:0; pointer-events:none;
          background: radial-gradient(circle at 50% 30%, rgba(212,175,55,0.1), transparent 50%);
        }
        .team-inner { max-width:1200px; margin:0 auto; position:relative; z-index:1; }
        .team-subtitle {
          text-align:center; color:#b89fc5; font-size:1.1rem; margin-bottom:60px; letter-spacing:2px;
        }
        .team-category-title {
          font-family:'Bebas Neue',sans-serif; font-size:1.5rem; letter-spacing:4px;
          color:#d4af37; text-align:center; margin-bottom:40px; padding:8px 30px;
          border-top:1px solid rgba(212,175,55,0.3); border-bottom:1px solid rgba(212,175,55,0.3);
          display:inline-block; width:100%; box-sizing:border-box;
        }
        .team-section { margin-bottom:60px; }
        .team-row {
          display:flex; justify-content:center; flex-wrap:wrap;
          gap:40px; padding:0 20px;
        }
        .team-card {
          width:250px; border-radius:16px; overflow:hidden; cursor:pointer;
          background:linear-gradient(135deg,rgba(125,76,255,0.12),rgba(212,175,55,0.06));
          border:2px solid rgba(125,76,255,0.3); transition:all 0.4s ease;
          -webkit-tap-highlight-color:rgba(212,175,55,0.3);
        }
        .team-card:hover { transform:translateY(-10px) scale(1.02); border-color:#d4af37; box-shadow:0 15px 50px rgba(212,175,55,0.3); }
        .team-img-wrap { width:100%; height:280px; overflow:hidden; }
        .team-img-wrap img { width:100%; height:100%; object-fit:cover; object-position:top; transition:transform 0.4s; display:block; }
        .team-card:hover .team-img-wrap img { transform:scale(1.08); }
        .team-card-content { padding:20px; text-align:center; background:linear-gradient(to bottom,transparent,rgba(0,0,0,0.7)); }
        .team-card-content h4 { font-family:'Bebas Neue',sans-serif; font-size:1.2rem; color:#d4af37; letter-spacing:2px; margin:0 0 8px; }
        .team-card-content p { font-size:0.85rem; color:#b89fc5; margin:2px 0; }
        @media (max-width: 768px) {
          #about-us { padding: 80px 20px; }
          .team-category-title { font-size: 1.5rem !important; padding: 8px 20px !important; }
          .team-row { gap: 30px !important; }
          .team-card { width: 100% !important; max-width: 250px; }
          .team-img-wrap { height: 260px !important; }
          .team-card-content { padding: 15px !important; }
          .team-card-content h4 { font-size: 1.1rem !important; }
          .team-card-content p { font-size: 0.8rem !important; }
        }
        @media (max-width: 480px) {
          .team-card { max-width: 220px; }
          .section-title { font-size: 2rem !important; }
        }
      `}</style>

      <section id="about-us">
        <div className="team-bg" />
        <div className="team-inner">
          <h2 className="section-title" style={{ fontFamily: "'Bebas Neue', sans-serif", color: '#d4af37', letterSpacing: 5, textAlign: 'center', marginBottom: 20, fontSize: '3rem', position: 'relative', display: 'block', width: '100%' }}>
            TEAM LUMORA
          </h2>
          <p className="team-subtitle">The minds behind ENIGMA</p>

          {/* Staff Advisors */}
          <div className="team-section">
            <div className="team-category-title">STAFF ADVISORS</div>
            <div className="team-row">
              {staffAdvisors.map(m => <TeamCard key={m.name} member={m} />)}
            </div>
          </div>

          {/* Chairman */}
          <div className="team-section">
            <div className="team-category-title">EVENT CHAIRMAN</div>
            <div className="team-row">
              <TeamCard member={chairman} />
            </div>
          </div>

          {/* Secretaries */}
          <div className="team-section">
            <div className="team-category-title">EVENT SECRETARIES</div>
            <div className="team-row">
              {secretaries.map(m => <TeamCard key={m.name} member={m} />)}
            </div>
          </div>

          {/* Coordinators */}
          <div className="team-section">
            <div className="team-category-title">EVENT COORDINATORS</div>
            <div className="team-row">
              {coordinators.map(m => <TeamCard key={m.name} member={m} />)}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
