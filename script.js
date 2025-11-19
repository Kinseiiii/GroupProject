// Enhanced hotel database with real hotels from various cities
const hotels = [
    // New York Hotels
    {
        id: 1,
        name: "The Plaza Hotel",
        price: 750,
        location: "New York, Manhattan",
        distance: 0.2,
        rating: 4.8,
        reviews: 2847,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
        features: ["Free WiFi", "Luxury Spa", "Fine Dining", "Central Park View"],
        coordinates: { lat: 40.7644, lng: -73.9744 },
        city: "New York",
        stars: 5,
        badge: "Luxury"
    },
    {
        id: 2,
        name: "Ace Hotel Brooklyn",
        price: 289,
        location: "New York, Brooklyn",
        distance: 3.1,
        rating: 4.3,
        reviews: 1562,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=400&fit=crop",
        features: ["Free WiFi", "Rooftop Bar", "Co-working Space", "Pet Friendly"],
        coordinates: { lat: 40.6782, lng: -73.9442 },
        city: "New York",
        stars: 4,
        badge: "Trendy"
    },

    // Paris Hotels
    {
        id: 3,
        name: "Hôtel Ritz Paris",
        price: 1200,
        location: "Paris, 1st arrondissement",
        distance: 0.5,
        rating: 4.9,
        reviews: 1923,
        image: "https://www.hotelscombined.com/rimg/himg/c4/98/3b/leonardo-2664060-L_Appartement_Ritz___Vincent_Leroux_(1)_O-658802.jpg?width=968&height=607&crop=true",
        features: ["Michelin Star", "Luxury Spa", "Pool", "Butler Service"],
        coordinates: { lat: 48.8685, lng: 2.3294 },
        city: "Paris",
        stars: 5,
        badge: "Palace"
    },
    {
        id: 4,
        name: "Hôtel du Louvre",
        price: 420,
        location: "Paris, Louvre District",
        distance: 0.8,
        rating: 4.5,
        reviews: 2341,
        image: "https://s3.us-west-1.amazonaws.com/assets.curatorstravel.com/original/rooms/16367/1696563763301.webp",
        features: ["Historic Building", "Museum Views", "Fine Dining", "Concierge"],
        coordinates: { lat: 48.8610, lng: 2.3359 },
        city: "Paris",
        stars: 4,
        badge: "Heritage"
    },

    // Tokyo Hotels
    {
        id: 5,
        name: "Park Hyatt Tokyo",
        price: 680,
        location: "Tokyo, Shinjuku",
        distance: 1.2,
        rating: 4.7,
        reviews: 3124,
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=600&h=400&fit=crop",
        features: ["City Views", "Spa", "Pool", "Fine Dining"],
        coordinates: { lat: 35.6852, lng: 139.6917 },
        city: "Tokyo",
        stars: 5,
        badge: "Iconic"
    },
    {
        id: 6,
        name: "The Gate Hotel",
        price: 220,
        location: "Tokyo, Asakusa",
        distance: 2.3,
        rating: 4.2,
        reviews: 1876,
        image: "https://www.gate-hotel.jp/tokyo/rooms/room-image/luxe_k2.jpg",
        features: ["Temple Views", "Free WiFi", "Restaurant", "Modern Design"],
        coordinates: { lat: 35.7100, lng: 139.7957 },
        city: "Tokyo",
        stars: 4,
        badge: "Value"
    },

    // London Hotels
    {
        id: 7,
        name: "The Savoy",
        price: 850,
        location: "London, West End",
        distance: 0.3,
        rating: 4.8,
        reviews: 2765,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        features: ["River Views", "Luxury Spa", "Gordon Ramsay Restaurant", "Pool"],
        coordinates: { lat: 51.5103, lng: -0.1206 },
        city: "London",
        stars: 5,
        badge: "Legendary"
    },
    {
        id: 8,
        name: "The Hoxton Shoreditch",
        price: 195,
        location: "London, Shoreditch",
        distance: 2.8,
        rating: 4.4,
        reviews: 1987,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop",
        features: ["Free WiFi", "Hip Bar", "Co-working", "Pet Friendly"],
        coordinates: { lat: 51.5254, lng: -0.0832 },
        city: "London",
        stars: 4,
        badge: "Trendy"
    },

    // Dubai Hotels
    {
        id: 9,
        name: "Burj Al Arab Jumeirah",
        price: 2500,
        location: "Dubai, Jumeirah",
        distance: 8.5,
        rating: 4.9,
        reviews: 4823,
        image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=600&h=400&fit=crop",
        features: ["Private Beach", "Helipad", "Luxury Suites", "Butler Service"],
        coordinates: { lat: 25.1412, lng: 55.1852 },
        city: "Dubai",
        stars: 5,
        badge: "7-Star"
    },
    {
        id: 10,
        name: "Rove Downtown Dubai",
        price: 120,
        location: "Dubai, Downtown",
        distance: 1.2,
        rating: 4.1,
        reviews: 3241,
        image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop",
        features: ["Burj Khalifa Views", "Pool", "Gym", "Free WiFi"],
        coordinates: { lat: 25.1972, lng: 55.2744 },
        city: "Dubai",
        stars: 3,
        badge: "Smart"
    },

    // Additional hotels for variety
    {
        id: 11,
        name: "Mandarin Oriental",
        price: 890,
        location: "Bangkok, Riverside",
        distance: 0.4,
        rating: 4.8,
        reviews: 2156,
        image: "https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJvYXV0aCI6eyJjbGllbnRfaWQiOiJzaXRlY29yZSJ9LCJwYXRoIjoibWFuZGFyaW4tb3JpZW50YWwtaG90ZWwtZ3JvdXBcL2ZpbGVcL2hQcjhMenpDZnNXQTdSQnRWVGsxLmpwZyJ9:mandarin-oriental-hotel-group:c7UOgQI4SHdnjbzwmSks5lfk4_ZnGVjoaiBjU7RL0KY",
        features: ["River Views", "Spa", "Infinity Pool", "Fine Dining"],
        coordinates: { lat: 13.7246, lng: 100.5156 },
        city: "Bangkok",
        stars: 5,
        badge: "Luxury"
    },
    {
        id: 12,
        name: "Generator Hostel",
        price: 45,
        location: "Berlin, Mitte",
        distance: 1.8,
        rating: 4.0,
        reviews: 4321,
        image: "https://www.hostelworld.com/blog/wp-content/uploads/2018/09/hostel-room-types-5.jpg",
        features: ["Social Events", "Bar", "Game Room", "Budget"],
        coordinates: { lat: 52.5300, lng: 13.3849 },
        city: "Berlin",
        stars: 2,
        badge: "Hostel"
    }
];

// DOM Elements
const hotelsList = document.getElementById('hotelsList');
const searchInput = document.getElementById('searchInput');
const priceRange = document.getElementById('priceRange');
const currentPrice = document.getElementById('currentPrice');
const sortSelect = document.getElementById('sortSelect');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultsCount = document.getElementById('resultsCount');
const resultsTitle = document.getElementById('resultsTitle');

// Current filters
let currentFilters = {
    searchQuery: '',
    maxPrice: 500,
    minStars: 0,
    sortBy: 'best'
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Set up price slider
    priceRange.addEventListener('input', function() {
        const price = parseInt(this.value);
        currentPrice.textContent = `$${price}`;
        currentFilters.maxPrice = price;
        searchHotels();
    });

    // Set up search input with debouncing
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentFilters.searchQuery = this.value.toLowerCase();
            searchHotels();
        }, 500);
    });

    // Load initial hotels
    displayHotels(hotels);
    updateResultsCount(hotels.length);
});

// Search hotels function
function searchHotels() {
    showLoading();
    
    setTimeout(() => {
        let filteredHotels = hotels.filter(hotel => {
            const matchesSearch = 
                hotel.name.toLowerCase().includes(currentFilters.searchQuery) ||
                hotel.location.toLowerCase().includes(currentFilters.searchQuery) ||
                hotel.city.toLowerCase().includes(currentFilters.searchQuery) ||
                hotel.features.some(feature => 
                    feature.toLowerCase().includes(currentFilters.searchQuery)
                );
            
            const matchesPrice = hotel.price <= currentFilters.maxPrice;
            const matchesStars = currentFilters.minStars === 0 || hotel.stars >= currentFilters.minStars;
            
            return matchesSearch && matchesPrice && matchesStars;
        });

        // Sort results
        filteredHotels = sortHotelsList(filteredHotels, currentFilters.sortBy);
        
        displayHotels(filteredHotels);
        updateResultsCount(filteredHotels.length);
        updateResultsTitle(currentFilters.searchQuery, filteredHotels.length);
        hideLoading();
    }, 800);
}

// Sort hotels based on selected option
function sortHotels() {
    currentFilters.sortBy = sortSelect.value;
    searchHotels();
}

function sortHotelsList(hotelsList, sortBy) {
    switch(sortBy) {
        case 'price':
            return [...hotelsList].sort((a, b) => a.price - b.price);
        case 'price-desc':
            return [...hotelsList].sort((a, b) => b.price - a.price);
        case 'rating':
            return [...hotelsList].sort((a, b) => b.rating - a.rating);
        case 'distance':
            return [...hotelsList].sort((a, b) => a.distance - b.distance);
        case 'best':
        default:
            return [...hotelsList].sort((a, b) => calculateMatchScore(b) - calculateMatchScore(a));
    }
}

// Calculate match score for smart ranking
function calculateMatchScore(hotel) {
    const priceWeight = 0.4;
    const distanceWeight = 0.2;
    const ratingWeight = 0.3;
    const starWeight = 0.1;
    
    // Normalize scores (0-1)
    const maxPrice = Math.max(...hotels.map(h => h.price));
    const priceScore = 1 - (hotel.price / maxPrice);
    
    const maxDistance = Math.max(...hotels.map(h => h.distance));
    const distanceScore = 1 - (hotel.distance / maxDistance);
    
    const ratingScore = hotel.rating / 5;
    const starScore = hotel.stars / 5;
    
    return (priceScore * priceWeight) + 
           (distanceScore * distanceWeight) + 
           (ratingScore * ratingWeight) +
           (starScore * starWeight);
}

// Display hotels in the grid
function displayHotels(hotelsToDisplay) {
    if (hotelsToDisplay.length === 0) {
        hotelsList.innerHTML = `
            <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 4rem;">
                <i class="fas fa-search" style="font-size: 4rem; color: #9ca3af; margin-bottom: 1rem;"></i>
                <h3 style="color: #374151; margin-bottom: 0.5rem;">No hotels found</h3>
                <p style="color: #6b7280;">Try adjusting your search criteria or browse popular destinations</p>
            </div>
        `;
        return;
    }
    
    hotelsList.innerHTML = hotelsToDisplay.map(hotel => `
        <div class="hotel-card" data-hotel-id="${hotel.id}">
            ${hotel.badge ? `<div class="hotel-badge">${hotel.badge}</div>` : ''}
            <img src="${hotel.image}" alt="${hotel.name}" class="hotel-image">
            <div class="hotel-content">
                <div class="hotel-header">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <div class="hotel-price">
                        <div class="price-main">$${hotel.price}</div>
                        <div class="price-night">per night</div>
                    </div>
                </div>
                <div class="hotel-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${hotel.location} • ${hotel.distance} miles from center
                </div>
                <div class="hotel-rating">
                    <div class="rating-stars">
                        ${'★'.repeat(Math.floor(hotel.rating))}${'☆'.repeat(5-Math.floor(hotel.rating))}
                    </div>
                    <span class="rating-value">${hotel.rating}</span>
                    <span class="rating-count">(${hotel.reviews.toLocaleString()} reviews)</span>
                </div>
                <div class="hotel-features">
                    ${hotel.features.slice(0, 3).map(feature => `
                        <div class="feature">
                            <i class="fas fa-check"></i>
                            ${feature}
                        </div>
                    `).join('')}
                    ${hotel.features.length > 3 ? 
                        `<div class="feature">+${hotel.features.length - 3} more</div>` : ''}
                </div>
                <div class="hotel-actions">
                    <button class="book-btn" onclick="bookHotel(${hotel.id})">
                        <i class="fas fa-calendar-check"></i>
                        Book Now
                    </button>
                    <button class="favorite-btn" onclick="toggleFavorite(${hotel.id})">
                        <i class="far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Quick search functions
function setQuickSearch(city) {
    searchInput.value = city;
    currentFilters.searchQuery = city.toLowerCase();
    searchHotels();
    
    // Update active quick filter
    document.querySelectorAll('.filter-tag').forEach(tag => {
        tag.classList.remove('active');
    });
    event.target.classList.add('active');
}

function setStarRating(stars) {
    currentFilters.minStars = stars;
    searchHotels();
    
    // Update active star filter
    document.querySelectorAll('.star-filter').forEach(filter => {
        filter.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Update UI functions
function updateResultsCount(count) {
    resultsCount.textContent = count.toLocaleString();
}

function updateResultsTitle(query, count) {
    if (query) {
        resultsTitle.textContent = `${count} properties in "${query}"`;
    } else {
        resultsTitle.textContent = 'Discover Amazing Stays';
    }
}

// Enhanced booking system
let bookingState = {
    currentHotel: null,
    checkIn: null,
    checkOut: null,
    guests: 1,
    rooms: 1
};

function bookHotel(hotelId) {
    const hotel = hotels.find(h => h.id === hotelId);
    bookingState.currentHotel = hotel;
    
    const modal = createBookingModal(hotel);
    document.body.insertAdjacentHTML('beforeend', modal);
    
    // Initialize date pickers
    initializeDatePickers();
    
    // Add event listeners
    setupBookingEventListeners();
}

function createBookingModal(hotel) {
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
    
    return `
        <div class="booking-modal-overlay" id="bookingModal">
            <div class="booking-modal">
                <div class="booking-header">
                    <h2>Book ${hotel.name}</h2>
                    <button class="close-modal" onclick="closeBookingModal()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                
                <div class="booking-content">
                    <!-- Hotel Summary -->
                    <div class="hotel-summary">
                        <img src="${hotel.image}" alt="${hotel.name}" class="hotel-summary-image">
                        <div class="hotel-summary-details">
                            <h3>${hotel.name}</h3>
                            <div class="hotel-location">
                                <i class="fas fa-map-marker-alt"></i>
                                ${hotel.location}
                            </div>
                            <div class="hotel-rating">
                                ${'★'.repeat(Math.floor(hotel.rating))}${'☆'.repeat(5-Math.floor(hotel.rating))}
                                <span>${hotel.rating} (${hotel.reviews.toLocaleString()} reviews)</span>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Booking Form -->
                    <form class="booking-form" id="bookingForm">
                        <!-- Dates -->
                        <div class="form-section">
                            <h4>Select Dates</h4>
                            <div class="date-inputs">
                                <div class="input-group">
                                    <label for="checkIn">Check-in</label>
                                    <input type="date" id="checkIn" name="checkIn" min="${today}" required>
                                </div>
                                <div class="input-group">
                                    <label for="checkOut">Check-out</label>
                                    <input type="date" id="checkOut" name="checkOut" min="${tomorrow}" required>
                                </div>
                            </div>
                            <div class="stay-duration" id="stayDuration" style="display: none;">
                                <span id="nightsCount">0 nights</span>
                            </div>
                        </div>
                        
                        <!-- Guests & Rooms -->
                        <div class="form-section">
                            <h4>Guests & Rooms</h4>
                            <div class="guest-inputs">
                                <div class="input-group">
                                    <label for="guests">Guests</label>
                                    <div class="counter-input">
                                        <button type="button" class="counter-btn" onclick="adjustGuests(-1)">-</button>
                                        <span id="guestsCount">1</span>
                                        <button type="button" class="counter-btn" onclick="adjustGuests(1)">+</button>
                                    </div>
                                </div>
                                <div class="input-group">
                                    <label for="rooms">Rooms</label>
                                    <div class="counter-input">
                                        <button type="button" class="counter-btn" onclick="adjustRooms(-1)">-</button>
                                        <span id="roomsCount">1</span>
                                        <button type="button" class="counter-btn" onclick="adjustRooms(1)">+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Special Requests -->
                        <div class="form-section">
                            <h4>Special Requests</h4>
                            <textarea 
                                id="specialRequests" 
                                placeholder="Any special requests or preferences..." 
                                rows="3"
                            ></textarea>
                        </div>
                        
                        <!-- Price Summary -->
                        <div class="price-summary">
                            <h4>Price Summary</h4>
                            <div class="price-breakdown">
                                <div class="price-item">
                                    <span>$${hotel.price} × <span id="summaryNights">0</span> nights</span>
                                    <span id="roomTotal">$0</span>
                                </div>
                                <div class="price-item">
                                    <span>Taxes & Fees</span>
                                    <span id="taxes">$0</span>
                                </div>
                                <div class="price-item total">
                                    <span>Total</span>
                                    <span id="totalPrice">$0</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                
                <div class="booking-footer">
                    <button type="button" class="btn-secondary" onclick="closeBookingModal()">
                        Cancel
                    </button>
                    <button type="button" class="btn-primary" onclick="confirmBooking()" id="confirmBtn" disabled>
                        Confirm Booking
                    </button>
                </div>
            </div>
        </div>
    `;
}

function initializeDatePickers() {
    const checkInInput = document.getElementById('checkIn');
    const checkOutInput = document.getElementById('checkOut');
    
    checkInInput.addEventListener('change', function() {
        const checkInDate = new Date(this.value);
        const minCheckOut = new Date(checkInDate.getTime() + 86400000).toISOString().split('T')[0];
        checkOutInput.min = minCheckOut;
        
        if (checkOutInput.value && new Date(checkOutInput.value) <= checkInDate) {
            checkOutInput.value = '';
        }
        
        updateBookingSummary();
    });
    
    checkOutInput.addEventListener('change', updateBookingSummary);
}

function setupBookingEventListeners() {
    document.getElementById('bookingForm').addEventListener('input', updateConfirmButton);
    document.getElementById('bookingModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeBookingModal();
        }
    });
}

function adjustGuests(change) {
    const guestsElement = document.getElementById('guestsCount');
    let guests = parseInt(guestsElement.textContent) + change;
    guests = Math.max(1, Math.min(8, guests)); // Limit 1-8 guests
    guestsElement.textContent = guests;
    bookingState.guests = guests;
    updateBookingSummary();
}

function adjustRooms(change) {
    const roomsElement = document.getElementById('roomsCount');
    let rooms = parseInt(roomsElement.textContent) + change;
    rooms = Math.max(1, Math.min(5, rooms)); // Limit 1-5 rooms
    roomsElement.textContent = rooms;
    bookingState.rooms = rooms;
    updateBookingSummary();
}

function updateBookingSummary() {
    const checkIn = document.getElementById('checkIn').value;
    const checkOut = document.getElementById('checkOut').value;
    const stayDuration = document.getElementById('stayDuration');
    const nightsCount = document.getElementById('nightsCount');
    const summaryNights = document.getElementById('summaryNights');
    const roomTotal = document.getElementById('roomTotal');
    const taxes = document.getElementById('taxes');
    const totalPrice = document.getElementById('totalPrice');
    
    if (checkIn && checkOut) {
        const nights = calculateNights(checkIn, checkOut);
        const roomRate = bookingState.currentHotel.price * bookingState.rooms;
        const roomTotalAmount = roomRate * nights;
        const taxesAmount = roomTotalAmount * 0.12; // 12% tax
        const totalAmount = roomTotalAmount + taxesAmount;
        
        nightsCount.textContent = `${nights} nights`;
        summaryNights.textContent = nights;
        roomTotal.textContent = `$${roomTotalAmount.toLocaleString()}`;
        taxes.textContent = `$${taxesAmount.toLocaleString()}`;
        totalPrice.textContent = `$${totalAmount.toLocaleString()}`;
        
        stayDuration.style.display = 'block';
        bookingState.checkIn = checkIn;
        bookingState.checkOut = checkOut;
    } else {
        stayDuration.style.display = 'none';
        roomTotal.textContent = '$0';
        taxes.textContent = '$0';
        totalPrice.textContent = '$0';
    }
    
    updateConfirmButton();
}

function calculateNights(checkIn, checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
}

function updateConfirmButton() {
    const confirmBtn = document.getElementById('confirmBtn');
    const isFormValid = bookingState.checkIn && bookingState.checkOut;
    confirmBtn.disabled = !isFormValid;
    
    if (isFormValid) {
        confirmBtn.innerHTML = `<i class="fas fa-lock"></i> Confirm Booking - $${document.getElementById('totalPrice').textContent}`;
    } else {
        confirmBtn.innerHTML = `Confirm Booking`;
    }
}

function confirmBooking() {
    const specialRequests = document.getElementById('specialRequests').value;
    const bookingData = {
        ...bookingState,
        specialRequests,
        bookingReference: generateBookingReference(),
        bookingDate: new Date().toISOString(),
        totalPrice: parseFloat(document.getElementById('totalPrice').textContent.replace('$', '').replace(',', ''))
    };
    
    // Show confirmation
    showBookingConfirmation(bookingData);
}

function generateBookingReference() {
    return 'STF' + Date.now() + Math.random().toString(36).substr(2, 5).toUpperCase();
}

function showBookingConfirmation(bookingData) {
    const modal = document.getElementById('bookingModal');
    modal.innerHTML = `
        <div class="booking-modal confirmation-modal">
            <div class="confirmation-content">
                <div class="confirmation-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h2>Booking Confirmed!</h2>
                <p class="confirmation-reference">Reference: ${bookingData.bookingReference}</p>
                
                <div class="confirmation-details">
                    <h4>Booking Details</h4>
                    <div class="detail-item">
                        <span>Hotel:</span>
                        <span>${bookingData.currentHotel.name}</span>
                    </div>
                    <div class="detail-item">
                        <span>Dates:</span>
                        <span>${formatDate(bookingData.checkIn)} - ${formatDate(bookingData.checkOut)}</span>
                    </div>
                    <div class="detail-item">
                        <span>Guests:</span>
                        <span>${bookingData.guests} guest(s), ${bookingData.rooms} room(s)</span>
                    </div>
                    <div class="detail-item">
                        <span>Total:</span>
                        <span>$${bookingData.totalPrice.toLocaleString()}</span>
                    </div>
                </div>
                
                <div class="confirmation-actions">
                    <button class="btn-primary" onclick="closeBookingModal()">
                        <i class="fas fa-print"></i>
                        Print Confirmation
                    </button>
                    <button class="btn-secondary" onclick="closeBookingModal()">
                        <i class="fas fa-home"></i>
                        Back to Search
                    </button>
                </div>
            </div>
        </div>
    `;
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.remove();
    }
    bookingState = {
        currentHotel: null,
        checkIn: null,
        checkOut: null,
        guests: 1,
        rooms: 1
    };
}