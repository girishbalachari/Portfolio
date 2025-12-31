import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from "../../assets/index";

export const ProjectCardData = [
  {
    id: 1,
    title: "Book Store App",
    des: " Developed a full-stack e-commerce Book Store application using the MERN stack (MongoDB, Express.js, React.js, Node.js) with Tailwind CSS for responsive UI, Redux Toolkit + RTK Query for efficient state management and data fetching, Mongoose for schema-based modeling, and JWT-based authentication for secure user login, cart management, and order processing.",
    src: projectThree,
  },
  {
    id: 2,
    title: "Uber Clone App",
    des: "Engineered a full-stack Uber clone using MERN stack with microservices architecture, Node.js + Express.js for backend services, React.js + Tailwind CSS for responsive frontend, MongoDB for data persistence, JWT-based authentication, and Socket.IO for real-time driver-rider tracking, ride requests, live location updates, and notifications.",
    src: projectOne,
  },
  {
    id: 3,
    title: "Restaurant App",
    des: "Developed a full-stack restaurant management and online ordering application using MERN stack with TypeScript, featuring Zustand for lightweight global state management, Stripe integration for secure payment processing, responsive UI with Tailwind CSS, and SEO-optimized server-side rendering via Next.js for improved discoverability and performance.",
    src: projectTwo,
  },
  {
    id: 4,
    title: "Facebook Clone App",
    des: "Developed a full-stack Facebook clone using Next.js, TypeScript, Tailwind CSS, Shadcn UI, and MongoDB, implementing secure authentication with Google OAuth, real-time friend requests and notifications, responsive reusable components for posts, stories, comments, likes, and shares, Cloudinary for video/image uploads for complete social media functionality.",
    src: projectFour,
  },
  {
    id: 5,
    title: "WhatsApp Clone",
    des: "Built a full-stack real-time WhatsApp clone using MERN stack with TypeScript, featuring one-to-one chatting, media sharing, and WebRTC-based video calling, powered by Socket.IO for live messaging, typing indicators, online/offline status, and call signaling, with secure OTP-based (email/phone) authentication and JWT tokens stored in HTTP-only cookies.",
    src: projectFive,
  },
  {
    id: 6,
    title: "Grocery Delivery App",
    des: "Developed a full-stack Grocery Delivery platform using MERN stack with TypeScript and Tailwind CSS, featuring a comprehensive admin panel for product and inventory management, dynamic cart system with real-time updates, secure Stripe checkout integration, order tracking, and a fully responsive UI for seamless customer and delivery partner experience.",
    src: projectSix,
  },
];

export const ProjectsCard = ({ title, des, src }) => {
  return (
    <div className="w-full px-4 py-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        <img
          className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt="src"
        />
      </div>
      <div className="w-full mt-5 flex flex-col gap-6">
        <div>
          <div className="flex justify-between items-center">
            <h3 className="text-base uppercase text-designColor font-normal">
              {title}
            </h3>
          </div>
          <p className="text-[11px] tracking-wide mt-3 hover:text-gray-100 duration-300">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
};
