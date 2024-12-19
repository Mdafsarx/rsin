type Testimonial = {
    name: string,
    title: string,
    position: string,
    date: string,
    comment: string,
}

export default function TestimonialCard({ name, title, position, date, comment }: Testimonial) {
    return (
        <div>
            <div className="w-[15.85rem] h-[16.5rem] p-4 bg-white rounded-2xl space-y-1">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{name}</h3>
                    <button className="bg-[#A5ECBE] px-2 py-2 rounded-full text-xs font-semibold">{title}</button>
                </div>
                <h3 className="text-gray-500 text-sm">{position}</h3>
                <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-0.5">
                        <svg width="18" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" fill="#2B9851" />
                            <path d="M10 13.6761L13.0417 12.8616L14.3125 17L10 13.6761ZM17 8.32704H11.6458L10 3L8.35417 8.32704H3L7.33334 11.6289L5.6875 16.956L10.0208 13.6541L12.6875 11.6289L17 8.32704Z" fill="white" />
                        </svg>
                        <svg width="18" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" fill="#2B9851" />
                            <path d="M10 13.6761L13.0417 12.8616L14.3125 17L10 13.6761ZM17 8.32704H11.6458L10 3L8.35417 8.32704H3L7.33334 11.6289L5.6875 16.956L10.0208 13.6541L12.6875 11.6289L17 8.32704Z" fill="white" />
                        </svg>
                        <svg width="18" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" fill="#2B9851" />
                            <path d="M10 13.6761L13.0417 12.8616L14.3125 17L10 13.6761ZM17 8.32704H11.6458L10 3L8.35417 8.32704H3L7.33334 11.6289L5.6875 16.956L10.0208 13.6541L12.6875 11.6289L17 8.32704Z" fill="white" />
                        </svg>
                        <svg width="18" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" fill="#2B9851" />
                            <path d="M10 13.6761L13.0417 12.8616L14.3125 17L10 13.6761ZM17 8.32704H11.6458L10 3L8.35417 8.32704H3L7.33334 11.6289L5.6875 16.956L10.0208 13.6541L12.6875 11.6289L17 8.32704Z" fill="white" />
                        </svg>
                        <svg width="18" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="20" height="20" fill="#2B9851" />
                            <path d="M10 13.6761L13.0417 12.8616L14.3125 17L10 13.6761ZM17 8.32704H11.6458L10 3L8.35417 8.32704H3L7.33334 11.6289L5.6875 16.956L10.0208 13.6541L12.6875 11.6289L17 8.32704Z" fill="white" />
                        </svg>
                    </div>
                    <p>{date}</p>
                </div>
                <p className="pt-1.5 text-sm">{comment}</p>
            </div>
        </div>
    )
}
