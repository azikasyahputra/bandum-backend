import { Head } from "@inertiajs/react";

export default function Cards() {
    const cardData1 = [
        { id: 1, author: "Hammad", adminImage: "/assets/images/cards/card-style-1/admin-1.png", cardImage: "/assets/images/cards/card-style-1/card-1.jpg" },
        { id: 2, author: "Mahmud", adminImage: "/assets/images/cards/card-style-1/admin-2.png", cardImage: "/assets/images/cards/card-style-1/card-2.jpg" },
        { id: 3, author: "Jamil Kareem", adminImage: "/assets/images/cards/card-style-1/admin-3.png", cardImage: "/assets/images/cards/card-style-1/card-3.jpg" },
    ];

    const cardData2 = [
        { id: 1, cardImage: "/assets/images/cards/card-style-2/card-1.jpg" },
        { id: 2, cardImage: "/assets/images/cards/card-style-2/card-2.jpg" },
        { id: 3, cardImage: "/assets/images/cards/card-style-2/card-3.jpg" },
    ];

    const cardData3 = [1, 2, 3];

    const cardData4 = [
        { id: 1, cardImage: "/assets/images/cards/card-style-4/card-1.png" },
        { id: 2, cardImage: "/assets/images/cards/card-style-4/card-2.png" },
        { id: 3, cardImage: "/assets/images/cards/card-style-4/card-3.png" },
    ];

    return (
        <>
            <Head title="Cards" />
            
            <div className="cards-styles pt-30">
                {/* card-style-1 */}
                <div className="row">
                    {cardData1.map((item) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                            <div className="card-style-1 mb-30">
                                <div className="card-meta">
                                    <div className="image">
                                        <img src={item.adminImage} alt="" />
                                    </div>
                                    <div className="text">
                                        <p className="text-sm text-medium">
                                            Posted by : <a href="#0">{item.author}</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="card-image">
                                    <a href="#0">
                                        <img src={item.cardImage} alt="" />
                                    </a>
                                </div>
                                <div className="card-content">
                                    <h4><a href="#0"> Card Title here </a></h4>
                                    <p>
                                        With supporting text below as a natural lead-in to
                                        additional content. consectetur adipiscing elit. Integer
                                        posuere erat a ante.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* card-style-2 */}
                <div className="row">
                    <div className="col-12">
                        <div className="title mt-30 mb-30">
                            <h2>Cards 2</h2>
                        </div>
                    </div>
                    {cardData2.map((item) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={item.id}>
                            <div className="card-style-2 mb-30">
                                <div className="card-image">
                                    <a href="#0">
                                        <img src={item.cardImage} alt="" />
                                    </a>
                                </div>
                                <div className="card-content">
                                    <h4><a href="#0">Card Title here </a></h4>
                                    <p>
                                        With supporting text below as a natural lead-in to
                                        additional content. consectetur adipiscing elit. Integer
                                        posuere erat a ante.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* card-style-3 */}
                <div className="row">
                    <div className="col-12">
                        <div className="title mt-30 mb-30">
                            <h2>Cards 3</h2>
                        </div>
                    </div>
                    {cardData3.map((id) => (
                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6" key={id}>
                            <div className="card-style-3 mb-30">
                                <div className="card-content">
                                    <h4><a href="#0">Card Title here </a></h4>
                                    <p>
                                        With supporting text below as a natural lead-in to
                                        additional content. consectetur adipiscing elit. Integer
                                        posuere erat a ante. With supporting text below as a
                                        natural lead-in to additional content. consectetur
                                        adipiscing elit. Integer posuere erat a ante.
                                    </p>
                                    <a href="#0" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* card-style-4 */}
                <div className="row">
                    <div className="col-12">
                        <div className="title mt-30 mb-30">
                            <h2>Cards 4</h2>
                        </div>
                    </div>
                    {cardData4.map((item) => (
                        <div className="col-xl-4 col-lg-4 col-md-6" key={item.id}>
                            <div className="card-style-4 mb-30">
                                <div className="card-image">
                                    <a href="#0">
                                        <img src={item.cardImage} alt="" />
                                    </a>
                                </div>
                                <div className="card-content">
                                    <h4><a href="#0">Card Title here </a></h4>
                                    <p>
                                        With supporting text below as a natural lead-in to
                                        additional content. consectetur adipiscing elit. Integer
                                        posuere erat a ante.
                                    </p>
                                    <a href="#0" className="read-more">Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
