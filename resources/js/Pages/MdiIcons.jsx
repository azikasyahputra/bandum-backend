import { Head } from "@inertiajs/react";

export default function MdiIcons() {
    const icons = [
        "abacus",
        "alarm-light-off",
        "alarm-light-off-outline",
        "broadcast",
        "broadcast-off",
        "calendar-clock-outline",
        "chat-question",
        "chat-question-outline",
        "check-decagram-outline",
        "clipboard-clock",
        "clipboard-clock-outline",
        "cookie-clock",
        "cookie-clock-outline",
        "cookie-edit",
        "cookie-edit-outline",
        "cookie-lock",
        "cookie-lock-outline",
        "cookie-off",
        "cookie-off-outline",
        "cookie-refresh",
        "cookie-refresh-outline",
        "dog-side-off",
        "fan-auto",
        "fire-off",
        "firework-off",
        "food-turkey",
        "gift-off",
        "gift-off-outline",
        "gift-open",
        "gift-open-outline",
        "kettle-pour-over",
        "koala",
        "message-question",
        "message-question-outline",
        "message-reply-outline",
        "message-reply-text-outline",
        "movie-check",
        "movie-check-outline",
        "movie-cog",
        "movie-cog-outline",
        "movie-minus",
        "movie-minus-outline",
        "movie-off",
        "movie-off-outline",
        "movie-open-check",
        "movie-open-check-outline",
        "movie-open-cog",
        "movie-open-cog-outline",
        "movie-open-edit",
        "movie-open-edit-outline",
        "movie-open-minus",
        "movie-open-minus-outline",
        "movie-open-off",
        "movie-open-off-outline",
        "movie-open-play",
        "movie-open-play-outline",
        "movie-open-plus",
        "movie-open-plus-outline",
        "movie-open-remove",
        "movie-open-remove-outline",
        "movie-open-settings",
        "movie-open-settings-outline",
        "movie-open-star",
        "movie-open-star-outline",
        "movie-play",
        "movie-play-outline",
        "movie-plus",
        "movie-plus-outline",
        "movie-remove",
        "movie-remove-outline",
        "movie-settings",
        "movie-settings-outline",
        "movie-star",
        "movie-star-outline",
        "projector-screen-outline",
        "robot-happy",
        "robot-happy-outline",
        "script-text-key",
        "script-text-key-outline",
        "script-text-play",
        "script-text-play-outline",
        "star-shooting",
        "star-shooting-outline",
        "surround-sound-2-1",
        "surround-sound-5-1-2",
        "table-picnic",
        "tag-arrow-down",
        "tag-arrow-down-outline",
        "tag-arrow-left",
        "tag-arrow-left-outline",
        "tag-arrow-right",
        "tag-arrow-right-outline",
        "tag-arrow-up",
        "tag-arrow-up-outline",
        "train-car-passenger",
        "train-car-passenger-door",
        "train-car-passenger-door-open",
        "train-car-passenger-variant",
        "turkey",
        "webcam-off",
    ];

    return (
        <>
            <Head title="MDI Icons" />
            
            
            
            <div className="icons-wrapper">
                <div className="row">
                    <div className="col-12">
                        <div className="card-style">
                            <div className="title d-flex justify-content-between">
                                <div className="left">
                                    <h6 className="text-medium mb-10">Icons Pack</h6>
                                </div>
                            </div>
                            <ul className="icons">
                                {icons.map((icon, idx) => (
                                    <li className="trigger Free" key={idx}>
                                        <i className={`mdi mdi-${icon}`}></i><span>{icon}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
