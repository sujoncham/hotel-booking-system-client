import banner from '../../assets/image/banner.png';
const Banner = () => {
    return (
        <div class="container mx-auto px-10 py-10">
            <div class="flex justify-between items-center lg:flex-row-reverse">
                <img src={banner} class="w-[50%] rounded-lg shadow-2xl" alt="" />
                <div className="w-96">
                <h1 class="text-3xl font-bold">Provident cupiditate voluptatem et in!</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;