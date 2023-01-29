
const HomeContact = () => {
    return (
        <div className="bg-sky-900 py-10">
            <div className="container mx-auto flex justify-between items-center px-10 gap-10">
                <div className="w-[50%]">
                    <h1 className="text-xl font-bold">Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat perspiciatis doloremque dolores dicta totam quis magnam? Maxime mollitia repellat quibusdam</p>
                </div>
                <div className="w-[50%] flex justify-center items-center">
                    <form>
                        <div className="grid grid-cols-2 gap-5">
                            <input type="text" placeholder="Type here" className="input w-72 input-bordered border-2 border-purple-400 rounded-md py-2 px-3" />
                            <input type="text" placeholder="Type here" className="input w-72 input-bordered border-2 border-purple-400 rounded-md py-2 px-3" />
                        
                            <input type="text" placeholder="Type here" className="input w-72 input-bordered border-2 border-purple-400 rounded-md py-2 px-3" />
                            <input type="text" placeholder="Type here" className="input w-72 input-bordered border-2 border-purple-400 rounded-md py-2 px-3" />
                        </div>
                        <div className="grid grid-cols-1 mt-3">
                            <textarea className="textarea textarea-bordered border-2 border-purple-400 rounded-md py-2 px-3" placeholder="Bio"></textarea>
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;