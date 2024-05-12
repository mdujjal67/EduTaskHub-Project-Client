

const Faq = () => {
    return (
        <div>
            <section className="dark:bg-gray-100 dark:text-gray-800 py-10">
            <div className="container flex flex-col justify-center px-4 py-5 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    <p className="mt-4 mb-8 dark:text-gray-600">Explore common queries about our services and platform.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg" open="">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">What services do you offer?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">We offer a comprehensive suite of services including branding, design, marketing, advertisement, and more. Our goal is to provide end-to-end solutions to meet your business needs.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How can I collaborate with your team?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Collaborating with us is easy! Simply reach out to our team via our contact page or by emailing us directly. We'll discuss your requirements and work together to achieve your goals.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">Can I request custom design solutions?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">Absolutely! We specialize in providing tailored design solutions to match your unique vision and requirements. Whether you need a new logo, website design, or marketing materials, we've got you covered.</p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-violet-600">How do I stay updated with your latest offerings?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">To stay informed about our latest services, promotions, and updates, subscribe to our newsletter. You'll receive regular updates directly to your inbox, ensuring you never miss out on exciting opportunities.</p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;