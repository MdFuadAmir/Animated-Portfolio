import image from"../../assets/sddefault-removebg-preview.png"
const Footer = () => {
    return (
        <div className="">
            <footer className="footer bg-zinc-950 text-gray-500 p-10">
  <aside>
    <img src={image} alt="" className="w-32"/>
    <p>
      Fuad Amir
      <br />
      Providing reliable tech since 2020
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
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
</footer>
            <footer className="footer footer-center bg-zinc-950 text-base-content p-4">
                <aside>
                    <p className="text-white">Copyright © ${new Date().getFullYear()} - All right reserved by Fuad Amir</p>
                </aside>
            </footer>   
        </div>
    );
};

export default Footer;