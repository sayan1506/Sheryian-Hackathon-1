import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Priya Sharma",
            review: "The kulhad chai here is absolutely authentic! It reminds me of my grandmother's recipe. The atmosphere is perfect for long conversations with friends.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=80&h=80&fit=crop&auto=format&q=80",
            location: "Mumbai"
        },
        {
            id: 2,
            name: "Rajesh Kumar",
            review: "Best adrak chai in the city! The staff is friendly and the ambiance makes you feel at home. Perfect spot for morning chai breaks.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format&q=80",
            location: "Delhi"
        },
        {
            id: 3,
            name: "Meera Patel",
            review: "Love the variety of chai flavors! The masala chai is exceptional and the kulhad experience is so traditional. Highly recommended for chai lovers.",
            rating: 4,
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format&q=80",
            location: "Pune"
        },
        {
            id: 4,
            name: "Arjun Singh",
            review: "Great place to unwind after work. The elaichi chai is my favorite, and the cozy seating makes it perfect for reading or working.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format&q=80",
            location: "Bangalore"
        },
        {
            id: 5,
            name: "Sneha Joshi",
            review: "Fantastic chai and even better service! The chocolate chai is a unique twist I never expected to love. Will definitely be back soon!",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&auto=format&q=80",
            location: "Jaipur"
        },
        {
            id: 6,
            name: "Vikram Reddy",
            review: "Amazing kulhad chai experience! The traditional taste combined with modern ambiance is perfect. Their special masala blend is something I crave every morning.",
            rating: 5,
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format&q=80",
            location: "Chennai"
        }

    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <span
                key={index}
                className={`star ${index < rating ? 'filled' : 'empty'}`}
            >
                ⭐
            </span>
        ));
    };

    return (
        <section className="testimonials-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">💬 What Our Customers Say</h2>
                    <p className="section-subtitle">
                        Real words from real chai lovers!
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <div className="quote-icon">"</div>
                                <p className="testimonial-text">{testimonial.review}</p>
                                <div className="rating">
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>

                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        loading="lazy"
                                    />
                                </div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-location">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-footer">
                    <p className="cta-text">Share your experience with us!</p>
                    <button className="review-btn">
                        Write a Review
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
