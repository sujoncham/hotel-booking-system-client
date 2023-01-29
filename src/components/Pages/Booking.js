import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import BookingForm from "../Booking/BookingForm";
import BrowseProperty from "../Booking/BrowseProperty";
import BrowseType from "../Booking/BrowseType";
import ExploreLocation from "../Booking/ExploreLocation";
import LocationGallery from "../Booking/LocationGallery";


const Booking = () => {
  
  return (
    <div className="content-place-center">
        <div>
            <BookingForm></BookingForm>
        </div>
        <div>
            <ExploreLocation></ExploreLocation>
        </div>
        <div>
            <BrowseType></BrowseType>
        </div>
        <div>
            <BrowseProperty />
        </div>
        <div>
            <LocationGallery></LocationGallery>
        </div>
    </div>
  );
};

export default Booking;
