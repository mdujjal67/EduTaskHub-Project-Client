

const Footer = () => {
    return (
        <footer className="bg-base-200 pt-10 lg:mt-[100px]">
            <div className="footer p-5 text-base-content">
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Collaborative Learning</a>
                <a className="link link-hover">Learning Analytics</a>
                <a className="link link-hover">Online Assignment Management</a>
                <a className="link link-hover">Community Engagement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
            <form>
                <h6 className="footer-title">Newsletter</h6>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="abc@site.com" className="input input-bordered join-item" />
                        <button className="btn bg-[#00396a] text-white join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
            </div>
            <div className="text-center text-sm text-gray-500 mt-4 pb-10">
                &copy; {new Date().getFullYear()} EduTaskHub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;