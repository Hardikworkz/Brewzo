import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Bakery.css';

const boardData = [
  {
    id: 1,
    date: "04. 03. 2026",
    title: "Producer Highlight: Burundi Coffee 🌱",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800",
    description: "Sourcing coffee in Burundi is as much about relationships and resilience as it is about flavor. When Ben and Kristy Carlson arrived in 2011, they witnessed...",
    theme: "caramel",
    btnLabel: "READ MORE"
  },
  {
    id: 2,
    date: "03. 03. 2026",
    title: "Producer Highlight 🌱",
    image: "https://images.unsplash.com/photo-1555507015-0624083c5093?auto=format&fit=crop&q=80&w=800",
    description: "In the hills of Las Flores, Santa Barbara, Honduras, 46 year old producer Isaias Fernandez tends to his 10 hectare farm, Finca el Ocotillo...",
    theme: "amber",
    btnLabel: "READ MORE"
  },
  {
    id: 3,
    date: "12. 11. 2025",
    title: "Spotify Fall and Winter Playlist 🎧",
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
  },
  {
    id: 1,
    date: "04. 03. 2026",
    title: "Producer Highlight: Burundi Coffee 🌱",
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&q=80&w=800",
    description: "Sourcing coffee in Burundi is as much about relationships and resilience as it is about flavor. When Ben and Kristy Carlson arrived in 2011, they witnessed...",
    theme: "caramel",
    btnLabel: "READ MORE"
  },
  {
    id: 2,
    date: "03. 03. 2026",
    title: "Producer Highlight 🌱",
    image: "https://images.unsplash.com/photo-1555507015-0624083c5093?auto=format&fit=crop&q=80&w=800",
    description: "In the hills of Las Flores, Santa Barbara, Honduras, 46 year old producer Isaias Fernandez tends to his 10 hectare farm, Finca el Ocotillo...",
    theme: "amber",
    btnLabel: "READ MORE"
  },
  {
    id: 3,
    date: "12. 11. 2025",
    title: "Spotify Fall and Winter Playlist 🎧",
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

export default function Bakery() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const scrollAmount = 400;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="brewzo-container">
      {/* Header with name and arrows only - No Border */}
      <header className="board-header">
        <div className="header-text">
          <span className="title-accent">Brewzo's Breeze:</span>
          <h1 className="title-main">What's Cookin' in Our World</h1>
        </div>
        <div className="nav-arrows">
          <button onClick={() => scroll('left')}><ChevronLeft size={16} /></button>
          <button onClick={() => scroll('right')}><ChevronRight size={16} /></button>
        </div>
      </header>
 
      <div className="board-scroll-grid" ref={scrollRef}>
        {boardData.map((item) => (
          <div key={item.id} className="board-card" data-theme={item.theme}>
            <div className="card-image-box">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="card-info">
              <h3 className="card-date">{item.date}</h3>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
              <div className="card-action">
                <span className="action-tag">{item.btnLabel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}