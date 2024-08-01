import { HandPlatter, House, UserSearch } from "lucide-react";
import { FaAddressBook, FaPhoneVolume } from "react-icons/fa6";
import { ImPriceTags } from "react-icons/im";
import { FaQuestion } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { TbUsersGroup } from "react-icons/tb";

export const massageCategories = [
    {
        name: "Swedish Massage",
        image: "/1.jpg",
        description: "A gentle, relaxing massage that uses long, flowing strokes to improve circulation and promote relaxation. Reduces stress, increases relaxation, and can help improve overall well-being.",
        duration: "60 minutes",
        price: "$70"
    },
    {
        name: "Deep Tissue Massage",
        image: "/2.jpg",
        description: "Focuses on the deeper layers of muscle tissue, using more pressure to relieve chronic pain and tension. Alleviates chronic muscle pain, improves mobility, and reduces inflammation.",
        duration: "60 minutes",
        price: "$80"
    },
    {
        name: "Hot Stone Massage",
        image: "/3.jpg",
        description: "Uses smooth, heated stones placed on specific parts of the body to relax muscles and ease tension. Promotes deep muscle relaxation, improves circulation, and relieves pain and muscle spasms.",
        duration: "90 minutes",
        price: "$120"
    },
    {
        name: "Aromatherapy Massage",
        image: "/4.jpg",
        description: "Incorporates essential oils into the massage to enhance physical and emotional well-being. Reduces stress, improves mood, and can help with various ailments depending on the essential oil used.",
        duration: "60 minutes",
        price: "$85"
    },
    {
        name: "Sports Massage",
        image: "/5.jpg",
        description: "Designed for athletes, this massage focuses on areas of the body that are overused and stressed from repetitive and often aggressive movements. Enhances athletic performance, reduces the risk of injury, and aids in recovery.",
        duration: "60 minutes",
        price: "$90"
    },
    {
        name: "Prenatal Massage",
        image: "/6.jpg",
        description: "Tailored for the needs of pregnant women, helping to reduce pregnancy discomforts. Eases back pain, reduces swelling, and improves sleep quality.",
        duration: "60 minutes",
        price: "$75"
    },
    {
        name: "Thai Massage",
        image: "/7.jpg",
        description: "Combines acupressure, Ayurvedic principles, and assisted yoga postures. Increases flexibility, relieves muscle and joint tension, and balances the body's energy systems.",
        duration: "90 minutes",
        price: "$110"
    },
    {
        name: "Shiatsu Massage",
        image: "/8.jpg",
        description: "A Japanese form of massage therapy that uses finger pressure on specific points of the body. Promotes energy flow, reduces stress, and can help with digestive and respiratory issues.",
        duration: "60 minutes",
        price: "$80"
    },
    {
        name: "Reflexology",
        image: "/9.jpg",
        description: "Focuses on applying pressure to specific points on the feet, hands, and ears that correspond to different body organs and systems. Improves overall health, reduces stress, and promotes relaxation.",
        duration: "30 minutes",
        price: "$40"
    },
    {
        name: "Trigger Point Therapy",
        image: "/10.jpg",
        description: "Targets tight areas within muscle tissue that cause pain in other parts of the body. Reduces pain, increases range of motion, and helps alleviate chronic pain conditions.",
        duration: "60 minutes",
        price: "$85"
    },
    {
        name: "Lymphatic Drainage Massage",
        image: "/11.jpg",
        description: "Uses light pressure and rhythmic movements to stimulate the lymphatic system. Reduces swelling, improves immune function, and helps detoxify the body.",
        duration: "60 minutes",
        price: "$75"
    },
    {
        name: "Couples Massage",
        image: "/12.jpg",
        description: "Allows two people to experience massage simultaneously in the same room. Provides a shared relaxation experience, reduces stress, and improves bonding.",
        duration: "60 minutes",
        price: "$150"
    },
    {
        name: "Chair Massage",
        image: "/13.jpg",
        description: "A shorter, seated massage focusing on the back, neck, shoulders, and arms. Convenient, quick relaxation, and tension relief, often available in public spaces or workplaces.",
        duration: "30 minutes",
        price: "$40"
    },
    {
        name: "Sauna Session",
        image: "/14.jpg",
        description: "Traditional sauna session to help detoxify the body and relax the muscles. Enhances relaxation, improves circulation, and aids in detoxification.",
        duration: "30 minutes",
        price: "$25"
    },
    {
        name: "Infrared Sauna Session",
        image: "/15.jpg",
        description: "Uses infrared light to create heat, providing a deeper sweat at a lower temperature. Improves circulation, promotes detoxification, and can aid in weight loss.",
        duration: "45 minutes",
        price: "$35"
    },
    {
        name: "Herbal Sauna Session",
        image: "/16.jpg",
        description: "Combines traditional sauna with the healing properties of herbs for enhanced relaxation and health benefits. Enhances detoxification, boosts immune system, and provides a soothing aromatic experience.",
        duration: "45 minutes",
        price: "$40"
    }
];

export const webRoutes = [
    {
        icon: House,
        label: "Home",
        href: "/"
    },
    {
        icon: UserSearch,
        label: "About us",
        href: "/about-us"
    },
    {
        icon: FaAddressBook,
        label: "Booking System",
        href: "/booking-system"
    },
    {
        icon: ImPriceTags,
        label: "Pricing",
        href: "/pricing"
    },
    // {
    //     icon: FaQuestion,
    //     label: "FAQs",
    //     href: "/faqs"
    // },
    // {
    //     icon: FaPhoneVolume,
    //     label: "Contact Us",
    //     href: "/contact-us"
    // },
    {
        icon: HandPlatter,
        label: "Services",
        href: "/services"
    },
    // {
    //     icon: GrGallery,
    //     label: "Gallery",
    //     href: "/gallery"
    // }
    // {
    //     icon: TbUsersGroup,
    //     label: "Team",
    //     href: "/team"
    // },
];

export const testimoniesObject = [
    {
        name: "John D",
        image: "https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg",
        rating: "★★★★★",
        content: "The massage was absolutely wonderful! I feel so much more relaxed. The ambiance of the spa was incredibly soothing, and the staff were very professional and attentive to my needs. I highly recommend this place to anyone looking for a rejuvenating experience."
    },
    {
        name: "Sarah W",
        image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
        rating: "★★★★☆",
        content: "Great experience! The sauna was very clean and well-maintained. I enjoyed the variety of sauna options available, and the relaxation area was perfect for unwinding afterwards. The only minor downside was the wait time, but overall, it was a fantastic visit."
    },
    {
        name: "Emily R",
        image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
        rating: "★★★★★",
        content: "I loved the aromatherapy massage. The staff was very professional and made me feel comfortable throughout the entire session. The blend of essential oils used was delightful and really enhanced the overall experience. I left feeling completely rejuvenated."
    },
    {
        name: "Michael B",
        image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg",
        rating: "★★★★☆",
        content: "Excellent service and friendly staff. Will definitely come back! The massage therapist was skilled and attentive to my preferences, ensuring that I had a personalized and relaxing experience. The spa's atmosphere was tranquil and inviting, making it easy to unwind."
    },
    {
        name: "Anna K",
        image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
        rating: "★★★★★",
        content: "The best massage I've ever had. Highly recommended! From the moment I walked in, I was greeted warmly and made to feel at home. The therapist tailored the massage to my specific needs, and I left feeling incredibly relaxed and free of tension. A truly outstanding experience."
    },
    {
        name: "David L",
        image: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg",
        rating: "★★★★☆",
        content: "Wonderful experience. The sauna was very relaxing. I appreciated the cleanliness and the calming environment of the spa. The staff were courteous and attentive, making sure that I had everything I needed for a comfortable visit. I'll definitely be returning."
    },
    {
        name: "Olivia M",
        image: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg",
        rating: "★★★★★",
        content: "Fantastic service and atmosphere. I felt very pampered. The spa offers a wide range of treatments, and I particularly enjoyed the deep tissue massage. The therapist was excellent, and the overall environment was peaceful and serene. Highly recommend for anyone seeking a bit of luxury and relaxation."
    },
    {
        name: "Daniel S",
        image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
        rating: "★★★★★",
        content: "A very relaxing experience. The staff was very attentive and made sure that all my needs were met. The massage was incredibly soothing, and the spa's ambiance added to the overall sense of tranquility. It's a perfect escape from the daily grind, and I can't wait to go back."
    }
];

export const specialOffersObject = [
    {
        image: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg",
        description: "Experience unparalleled relaxation and rejuvenation with our exclusive offer! When you subscribe to our monthly membership, enjoy your first month completely free. This allows you to fully immerse yourself in our luxurious massage and sauna services without any upfront cost. Our monthly subscription is designed to provide you with consistent, high-quality care, ensuring you maintain your wellness journey with ease and affordability."
    },
    {
        image: "https://images.pexels.com/photos/1116302/pexels-photo-1116302.jpeg",
        description: "At our wellness center, we believe in creating memorable experiences beyond just our services. We love to celebrate special moments with our clients, like birthdays, with personalized touches that make your visit even more special. Whether it's a complimentary service upgrade or a small surprise gift, we strive to make every visit a cherished memory, showing our appreciation for your loyalty and trust in us."
    },
    {
        image: "https://images.pexels.com/photos/5240677/pexels-photo-5240677.jpeg",
        description: "Your comfort and convenience are our top priorities. That’s why we offer the flexibility to enjoy our top-notch massage and sauna services wherever you are. Whether it’s the comfort of your own home, a hotel, or any other preferred location, our professional team will come to you, equipped with everything needed to provide a seamless and relaxing experience. This service ensures you can indulge in ultimate relaxation without the hassle of travel, fitting perfectly into your busy lifestyle."
    }
]

export const massagesObject = [
    {
        image: "https://images.pexels.com/photos/6560304/pexels-photo-6560304.jpeg",
        name: "Swedish Massage",
        description: "A gentle, relaxing massage that uses long, flowing strokes to improve circulation and promote relaxation. Reduces stress, increases relaxation, and can help improve overall well-being."
    },
    {
        image: "https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg",
        name: "Deep Tissue Massage",
        description: "Focuses on the deeper layers of muscle tissue, using more pressure to relieve chronic pain and tension. Alleviates chronic muscle pain, improves mobility, and reduces inflammation."
    },
    {
        image: "https://images.pexels.com/photos/261055/pexels-photo-261055.jpeg",
        name: "Hot Stone Massage",
        description: "Uses smooth, heated stones placed on specific parts of the body to relax muscles and ease tension. Promotes deep muscle relaxation, improves circulation, and relieves pain and muscle spasms."
    },
]

export const pricingPlan = [
    {
        service: "Swedish Massage",
        duration: "60 minutes",
        price: "$70"
    },
    {
        service: "Deep Tissue Massage",
        duration: "60 minutes",
        price: "$80"
    },
    {
        service: "Hot Stone Massage",
        duration: "90 minutes",
        price: "$120"
    },
    {
        service: "Aromatherapy Massage",
        duration: "60 minutes",
        price: "$85"
    },
    {
        service: "Sports Massage",
        duration: "60 minutes",
        price: "$90"
    },
    {
        service: "Prenatal Massage",
        duration: "60 minutes",
        price: "$75"
    },
    {
        service: "Thai Massage",
        duration: "90 minutes",
        price: "$110"
    },
    {
        service: "Shiatsu Massage",
        duration: "60 minutes",
        price: "$80"
    },
    {
        service: "Reflexology",
        duration: "30 minutes",
        price: "$40"
    },
    {
        service: "Trigger Point Therapy",
        duration: "60 minutes",
        price: "$85"
    },
    {
        service: "Lymphatic Drainage Massage",
        duration: "60 minutes",
        price: "$75"
    },
    {
        service: "Couples Massage",
        duration: "60 minutes",
        price: "$150"
    },
    {
        service: "Chair Massage",
        duration: "30 minutes",
        price: "$40"
    },
    {
        service: "Sauna Session",
        duration: "30 minutes",
        price: "$25"
    },
    {
        service: "Infrared Sauna Session",
        duration: "45 minutes",
        price: "$35"
    },
    {
        service: "Herbal Sauna Session",
        duration: "45 minutes",
        price: "$40"
    }
];



export const membershipPlans = [
    {
        name: "Gold Membership",
        monthlyFee: "$150",
        benefits: [
            "3 Swedish or Deep Tissue Massages (60 minutes each)",
            "2 Sauna Sessions (30 minutes each)",
            "10% off additional services",
            "Priority booking",
            "Complimentary herbal tea"
        ]
    },
    {
        name: "Platinum Membership",
        monthlyFee: "$250",
        benefits: [
            "5 Swedish, Deep Tissue, or Aromatherapy Massages (60 minutes each)",
            "4 Sauna Sessions (30 minutes each)",
            "15% off additional services",
            "Priority booking",
            "Complimentary herbal tea and essential oils"
        ]
    },
    {
        name: "Family Membership",
        monthlyFee: "$400",
        benefits: [
            "8 Swedish or Deep Tissue Massages (60 minutes each) that can be shared among family members",
            "6 Sauna Sessions (30 minutes each) that can be shared among family members",
            "20% off additional services",
            "Priority booking",
            "Complimentary family wellness consultation"
        ]
    }
];

