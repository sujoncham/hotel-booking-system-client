
const HomeContact = () => {
    return (
        <div className="flex justify-between items-center bg-sky-900 p-20">
            <div className="w-[50%]">
                <h1>Contact</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis doloremque dolores dicta totam quis magnam? Maxime mollitia repellat quibusdam</p>
            </div>
            <div className="w-[50%] flex justify-center items-center">
                <form>
                    <div class="grid grid-cols-2 gap-5">
                        <input type="text" placeholder="Type here" class="input input-bordered" />
                        <input type="text" placeholder="Type here" class="input input-bordered" />
                    
                        <input type="text" placeholder="Type here" class="input input-bordered" />
                        <input type="text" placeholder="Type here" class="input input-bordered" />
                    </div>
                    <div class="grid grid-cols-1">
                        <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
                    </div>
                
                </form>
            </div>
        </div>
    );
};

export default HomeContact;