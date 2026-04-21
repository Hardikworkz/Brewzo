import React from 'react';
import './EventsBoard.css';
import img from '../../assets/upcoming_sticker.png'
import beer from '../../assets/beer.png'
import whats from '../../assets/whats.png'
const eventsData = [
  {
    id: 1,
    date: "04. 03. 2026",
    title: "Producer Highlight: Burundi Coffee 🌱",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=1200",
    description: "Sourcing coffee in Burundi is as much about relationships and resilience as it is about flavor. When Ben and Kristy Carlson arrived in 2011, they witnessed significant challenges facing smallholder farmers— ranging from inconsistent quality and limited infrastructure to deep-rooted systemic inequalities that hindered long-term success. In response, they founded Long Miles Coffee, building a model centered on meaningful connections between farmers, improved infrastructure, and transparent partnerships with buyers.",
    theme: "caramel",
    btnLabel: "READ MORE"
  },
  {
    id: 2,
    date: "03. 03. 2026",
    title: "Producer Highlight 🌱",
    image: "https://images.unsplash.com/photo-1555507015-0624083c5093?auto=format&fit=crop&q=80&w=800",
    description: "In the hills of Las Flores, Santa Barbara, Honduras, 46 year old producer Isaias Fernandez tends to his 10 hectare farm, Finca el Ocotillo. You can find his farm at an astounding 1,720 masl. Here, the ideal growing conditions and generations of experience come together to produce exceptional specialty coffee that we have been sourcing consistently since 2015!",
    theme: "amber",
    btnLabel: "READ MORE"
  },
  {
    id: 3,
    date: "12. 11. 2025",
    title: "Spotify Fall and Winter Playlist 👾",
    image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=800",
    description: "Featuring tracks from our current vinyl selection!",
    theme: "terracotta",
    btnLabel: "LISTEN NOW"
  },
  {
    id: 4,
    date: "11. 21. 2025",
    title: "Follow us on Spotify 🎵",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
    description: "You can now follow us on Spotify! We'll never stop loving to play vinyl in the shops but we're excited to create some playlists inspired by our baristas...",
    theme: "slate",
    btnLabel: "LISTEN NOW"
  }
];

function UpcomingSticker() {
  return (
    <div className="upcoming-sticker" aria-hidden="true">
       <img src={img} alt="" />
    </div>
  );
}

export default function EventsBoard() {
  return (
    <div className="events-container">
      <header className="events-header">
        <div className="events-header-content">
          <h1 className="title-main">Community Board</h1>
          <p className="subtitle">Stay in the know and keep tabs on what's happening in our world!</p>
        </div>
        <div className="events-header-img" aria-hidden="true">
          <img className="events-header-bear" src={beer} alt="" />
          <img className="events-header-bubble" src={whats} alt="" />
        </div>
      </header>

      {/* Vertical List of Events */}
      <div className="events-list">
        {eventsData.map((item, index) => {
          const isFeatured = index === 0;

          return (
            <div key={item.id} className={`event-card ${isFeatured ? 'featured' : 'standard'}`} data-theme={item.theme}>
              
              {isFeatured ? (
                // Highlighted Large Featured Event Layout
                <div className="featured-content">
                  <div className="event-meta">
                    <span className="card-date">{item.date}</span>
                    <h2 className="card-title featured-title">{item.title}</h2>
                  </div>
                  
                  <div className="featured-split">
                    <div className="featured-image-container">
                      <div className="events-image-box">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <UpcomingSticker />
                    </div>
                    <div className="featured-info">
                      <span className="card-desc">{item.description}</span>
                      <div className="card-actions">
                        <h3 className="action-tag">{item.btnLabel}</h3>
                        
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Stacked Standard Event Layout
                <div className="standard-layout">
                  <div className="standard-image-container">
                    <div className="events-image-box">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                  <div className="standard-info">
                    <span className="card-date">{item.date}</span>
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-desc">{item.description}</p>
                    <div className="card-actions">
                      <h3 className="action-tag">{item.btnLabel}</h3>
                    </div>
                  </div>
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}
