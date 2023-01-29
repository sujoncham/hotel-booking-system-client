import millan from '../../assets/image/millan.png';
import orene from '../../assets/image/orene.png';
import smith from '../../assets/image/smith.png';

const Testimonials = () => {
    return (
        <div className='p-20 place-content-center'>
            <div>
            <h1>Testimonials</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elero inventore odit rerum, fuga iure.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 content-center'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="flex justify-start items-center">
                        <img src={orene} alt="Shoes" class="rounded-full w-24" />
                        <div>
                            <h1>Orene Stane</h1>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div class="card-body items-center">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="flex justify-start items-center">
                        <img src={smith} alt="Shoes" class="rounded-full w-24" />
                        <div>
                            <h1>Orene Stane</h1>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div class="card-body items-center">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="flex justify-start items-center">
                        <img src={millan} alt="Shoes" class="rounded-full w-24" />
                        <div>
                            <h1>Orene Stane</h1>
                            <p>CEO</p>
                        </div>
                    </div>
                    <div class="card-body items-center">
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;