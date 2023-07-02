import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <svg
          width="79"
          height="76"
          viewBox="0 0 79 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46.9749 21H48V51.3158C48 52.246 47.3881 53 46.6333 53H45.9499C45.195 53 44.5831 52.246 44.5831 51.3158V42.8947H43.2164C43.2164 23.5263 46.9749 21 46.9749 21ZM35.0159 53H34.3325C33.5776 53 32.9657 52.246 32.9657 51.3158V34.4737C32.5101 34.4737 32.0546 34.4737 31.4851 33.7017C30.9156 32.9299 30.4031 31.386 30.0614 29.4913C29.7197 26.0526 30.9156 21 30.9156 21L31.7698 29.0001H32.1115L33.3074 21.0001L34.5033 29.0001H34.845L36.0409 21L37.2368 29.0001H37.5785L38.4327 21C38.4327 21 39.6287 26.0526 39.287 29.4912C38.9453 31.3859 38.4327 32.9299 37.8633 33.7017C37.2938 34.4737 36.8382 34.4737 36.3826 34.4737V51.3158C36.3826 52.246 35.7707 53 35.0159 53Z"
            fill="#FFFFCC"
          />
          <rect
            x="-0.00516728"
            y="3.18507"
            width="46.2261"
            height="46.258"
            transform="matrix(0.769818 0.638264 -0.771885 0.635763 42.0226 1.16342)"
            stroke="#FFFFCC"
            stroke-width="5"
          />
          <rect
            x="-0.00516728"
            y="3.18507"
            width="46.2261"
            height="46.258"
            transform="matrix(0.769818 0.638264 -0.771885 0.635763 42.0226 11.8797)"
            stroke="#FFFFCC"
            stroke-width="5"
          />
        </svg>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
        <li>
          <a href="#">Link 4</a>
        </li>
        <li>
          <a href="#">Link 5</a>
        </li>
      </ul>

      
      <div className="search-icon">
        
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 18C13.3137 18 16 15.3137 16 12C16 8.68629 13.3137 6 10 6C6.68629 6 4 8.68629 4 12C4 15.3137 6.68629 18 10 18ZM17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L14.8834 16.2976C13.4038 17.4641 11.5359 18 9.5 18C5.91015 18 3 15.0899 3 11.5C3 7.91015 5.91015 5 9.5 5C13.0899 5 16 7.91015 16 11.5C16 13.5359 15.4641 15.4038 14.2976 16.8834L15.7071 18.2929C16.0976 18.6834 16.0976 19.3166 15.7071 19.7071C15.3166 20.0976 14.6834 20.0976 14.2929 19.7071L12.8834 18.2976C11.7079 19.1207 10.2559 19.5 8.75 19.5C5.46243 19.5 3 16.5376 3 12C3 7.46243 5.46243 4.5 8.75 4.5C12.0376 4.5 14.5 7.46243 14.5 12C14.5 13.5059 14.1207 14.9579 13.2976 16.1334L11.8866 14.7224C12.1833 14.2681 12.5 13.0446 12.5 12.0137C12.5 10.3434 11.6046 9 10.5 9C9.39543 9 8.5 10.3434 8.5 12.0137C8.5 13.0416 8.81386 14.2679 9.11006 14.7236L7.70711 16.1266C6.88409 14.9491 6.5 13.5103 6.5 12C6.5 7.85786 8.85786 5 11.9987 5C15.1421 5 17.5 7.35597 17.5 11.5C17.5 13.0123 17.0982 14.4344 16.389 15.5565C17.6984 13.6896 18.5 11.4715 18.5 9C18.5 5.41015 15.5899 3 12 3Z"
            fill="black"
          />
        </svg>
      </div>


      <div className="big-book-button">

        <button>Big Book Button</button>
      </div>
    </nav>
  );
};

export default Navbar;
