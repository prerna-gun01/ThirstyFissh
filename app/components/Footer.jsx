import React from 'react'

const page = () => {
    return (
        <div>
            <footer class="text-gray-600 body-font  ">
                <div class="bg-gray-100">
                    <div class="container mx-auto py-10 px-5 flex flex-wrap flex-col sm:flex-row">
                        <div>
                            <p className="text-gray-500 text-sm text-center sm:text-left">
                                Thirsty Fishh | Beyond the obvious
                            </p>
                            <p className="text-gray-500 text-sm text-center sm:text-left">
                                © 2020 Thirsty Fishh | All Rightes Reserved
                            </p>
                        </div>



                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">

                            <div className='mx-2'>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    hello@thirstyfishh.com
                                </p>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    +91 9970503705
                                </p>
                            </div>

                            <div className='mx-2'>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    {/* <FaFacebookF />  */}
                                    Facebook
                                </p>
                                <p className="text-gray-500 text-sm text-center sm:text-left">
                                    {/* <FaInstagram /> */}
                                    Instagram
                                </p>
                            </div>

                        </span>
                    </div>
                </div>
            </footer >
        </div>
    )
}

export default page
