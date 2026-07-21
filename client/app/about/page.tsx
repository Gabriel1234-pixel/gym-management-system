import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home" className="min-h-screen p-10">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Iron Peak Gym
        </h1>
        <p>Build Strength. Build Confidence. Reach Your Peak.</p>
      </section>

      <section id="about" className="min-h-screen p-10 bg-gray-100">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p>
          Iron Peak Gym offers professional training, modern equipment,
          and personalized fitness programs.
        </p>
      </section>

      <section id="members" className="min-h-screen p-10 bg-red-200">
        <h2 className="text-4xl font-bold mb-6">Members</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded p-4 shadow">
            <h3 className="font-bold">John Kamau</h3>
            <p>Premium Member</p>
          </div>

          <div className="border rounded p-4 shadow">
            <h3 className="font-bold">Mary Wambui</h3>
            <p>Annual Member</p>
          </div>

          <div className="border rounded p-4 shadow">
            <h3 className="font-bold">New Member</h3>
            <p>Basic Plan</p>
          </div>
        </div>
      </section>

      <section id="plans" className="min-h-screen p-10 bg-green-200">
        <h2 className="text-4xl font-bold mb-6">Membership Plans</h2>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="border rounded p-4 bg-white">
            <h3 className="font-bold">Basic</h3>
            <p>KES 1,500</p>
          </div>

          <div className="border rounded p-4 bg-white">
            <h3 className="font-bold">Standard</h3>
            <p>KES 4,000</p>
          </div>

          <div className="border rounded p-4 bg-white">
            <h3 className="font-bold">Premium</h3>
            <p>KES 7,500</p>
          </div>

          <div className="border rounded p-4 bg-white">
            <h3 className="font-bold">Annual</h3>
            <p>KES 14,000</p>
          </div>
        </div>
      </section>

      <section id="trainers" className="min-h-screen p-10">
        <h2 className="text-4xl font-bold mb-6">Our Trainers</h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border rounded p-4 shadow">
            <h3 className="font-bold">James Mwangi</h3>
            <p>Weight Training Specialist</p>
          </div>

          <div className="border rounded p-4 shadow">
            <h3 className="font-bold">Sarah Wanjiku</h3>
            <p>Yoga Instructor</p>
          </div>
        </div>
      </section>

     <section id="gallery" className="min-h-screen p-10 bg-blue-200">
        <h2 className="text-4xl font-bold mb-6">Gallery</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="border rounded p-10 bg-white text-center">
            Gym Area
          </div>

          <div className="border rounded p-10 bg-white text-center">
            Training Session
          </div>

          <div className="border rounded p-10 bg-white text-center">
            Fitness Class
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen p-10">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

        <p>Email: info@ironpeakgym.com</p>
        <p>Phone: 0712345678</p>
        <p>Location: Nakuru, Kenya</p>
      </section>
    </>
  );
}