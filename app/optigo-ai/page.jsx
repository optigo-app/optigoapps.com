'use client'
import ContactModal from "@/components/Contact/ContactModal";
import React, { useState } from "react";

const page = () => {
      const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <main className="bg-gray-50 text-gray-800">
          <section className="bg-white">
            <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold text-purple-700 mb-4">AI-Powered Jewellery ERP for Faster Search & Smarter Sales</h1>
                <p className="text-lg text-gray-600 mb-6">Optigo AI brings practical, secure, and industry-focused artificial intelligence directly into your jewellery ERP—helping you search faster, sell smarter, and act earlier.</p>
                <div className="flex gap-4">
                  <a href="#" onClick={() => setIsModalOpen(true)} className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700">
                    Book a Demo
                  </a>
                  {/* <a href="#" className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50">
                    Explore AI
                  </a> */}
                </div>
              </div>

              <div>
                <img src="/ai1.jpg" alt="AI powered ERP dashboard illustration" className="rounded-2xl shadow-lg w-full h-full" />
              </div>
            </div>
          </section>

          {/* <!-- AI FEATURE CARDS --> */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-purple-700 mb-10">How Optigo AI Helps Your Business</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* <!-- Card 1 --> */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 14 14">
                      <path fill="#7b00ff" fill-rule="evenodd" d="M1.625 1.25a.375.375 0 0 0-.375.375v4.387Q1.455 6 1.664 6c2.106 0 3.994.93 5.277 2.4C5.74 8.76 5.29 9.99 5.59 11H1.5A1.5 1.5 0 0 1 0 9.5V1.625A1.625 1.625 0 0 1 1.625 0h7.75A1.625 1.625 0 0 1 11 1.625V5a.625.625 0 1 1-1.25 0V1.625a.375.375 0 0 0-.375-.375zm4.625 1a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m4.926 5.15c-.195-.87-1.428-.865-1.616.006l-.02.097A2.65 2.65 0 0 1 7.422 9.57c-.896.159-.896 1.453 0 1.612a2.65 2.65 0 0 1 2.118 2.066l.02.097c.188.87 1.42.877 1.616.007l.025-.113a2.67 2.67 0 0 1 2.126-2.056c.897-.159.897-1.455 0-1.614A2.67 2.67 0 0 1 11.2 7.512z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Visual Search</h3>
                  <p className="text-sm text-gray-600 mb-4">Instantly find jewellery designs using image search, text search, or a smart combination of both.</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Search by image</li>
                    <li>Text-based AI search</li>
                    <li>Fast design discovery</li>
                    <li>ERP-connected results</li>
                  </ul>
                </div>

                {/* <!-- Card 2 --> */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <path fill="none" stroke="#7b00ff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4M7 15h5m5-3h-3m-3 0h-1m9 10.5a4.75 4.75 0 0 1 3.5-3.5a4.75 4.75 0 0 1-3.5-3.5a4.75 4.75 0 0 1-3.5 3.5a4.75 4.75 0 0 1 3.5 3.5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Sales Automation</h3>
                  <p className="text-sm text-gray-600 mb-4">Convert AI-discovered products directly into catalogs, quotations, and orders.</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Instant catalogs</li>
                    <li>Auto quotation creation</li>
                    <li>One-click order flow</li>
                    <li>Zero manual duplication</li>
                  </ul>
                </div>

                {/* <!-- Card 3 --> */}
                <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                      <g fill="none" stroke="#7b00ff" stroke-linecap="round" stroke-width="1.5">
                        <path stroke-linejoin="round" d="M7.491 14.002c-4.49-2.4-4.49-3.6-4.49-4s0-1.6 4.49-4m0 8c-4.49 2.4-4.49 3.2-4.49 4m4.49-4c4.49-2.4 4.49-3.6 4.49-4s0-1.601-4.49-4m0 0c4.49-2.4 4.49-3.2 4.49-4m-4.49 4L5.308 4.745C3 3.283 3 2.642 3 2" />
                        <path d="M14.412 12v1.98m-3.487 1.52h2.052m5.97 0H21m-2.052 2.974H21m-10.075 0h2.052m1.435 1.546v1.979m3.025-1.98V22m-.01-10v1.979m-3.45 5.988h3.97a1 1 0 0 0 1-1V14.98a1 1 0 0 0-1-1h-3.97a1 1 0 0 0-1 1v3.988a1 1 0 0 0 1 1Z" />
                      </g>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">AI Business Intelligence</h3>
                  <p className="text-sm text-gray-600 mb-4">Use your ERP data to gain insights, reduce guesswork, and improve everyday decisions.</p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Faster decision-making</li>
                    <li>Reduced manpower dependency</li>
                    <li>Secure private data usage</li>
                    <li>Smarter planning</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- AI WORKFLOW SECTION --> */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-purple-700 mb-10">AI-Powered Sales Flow</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 w-12" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#7b00ff" d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5m0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13M13 13h4.25A4.25 4.25 0 1 1 13 17.25zm5.008-2.93l-.262.6c-.192.44-.8.44-.992 0l-.262-.6a4.63 4.63 0 0 0-2.358-2.39l-.807-.36a.563.563 0 0 1 0-1.022l.762-.34a4.64 4.64 0 0 0 2.392-2.47l.269-.649a.538.538 0 0 1 1 0l.269.65a4.64 4.64 0 0 0 2.392 2.47l.762.339a.563.563 0 0 1 0 1.022l-.807.36a4.63 4.63 0 0 0-2.358 2.39" />
                  </svg>{" "}
                  <h4 className="font-semibold">Open Magic Catalog</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 w-12" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#7b00ff" d="M11 2q.396 0 .783.036a6 6 0 0 0-.699 1.966L11 4c-3.867 0-7 3.132-7 7s3.133 7 7 7a6.98 6.98 0 0 0 4.875-1.976l.15-.15A6.98 6.98 0 0 0 18 11l-.003-.085a6 6 0 0 0 1.966-.7a8.96 8.96 0 0 1-1.932 6.401l4.283 4.283l-1.415 1.414l-4.282-4.282A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9m5.53-.681a.507.507 0 0 1 .94 0l.254.611a4.37 4.37 0 0 0 2.25 2.326l.718.32a.53.53 0 0 1 0 .963l-.76.338a4.36 4.36 0 0 0-2.218 2.25l-.247.566a.506.506 0 0 1-.934 0l-.246-.565a4.36 4.36 0 0 0-2.22-2.251l-.76-.338a.53.53 0 0 1 0-.963l.718-.32a4.37 4.37 0 0 0 2.251-2.326z" />
                  </svg>
                  <h4 className="font-semibold">Run AI Search</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 w-12" width="50" height="50" viewBox="0 0 14 14">
                    <path fill="#7b00ff" fill-rule="evenodd" d="m12.041.76l-.726.727A7.001 7.001 0 0 0 0 7a.625.625 0 1 0 1.25 0a5.751 5.751 0 0 1 9.175-4.621l-.835.834a.5.5 0 0 0 .353.854h2.453a.5.5 0 0 0 .5-.5V1.114a.5.5 0 0 0-.854-.353m.71 6.24A.625.625 0 1 1 14 7a7 7 0 0 1-11.317 5.513l-.726.726a.5.5 0 0 1-.853-.354v-2.452a.5.5 0 0 1 .5-.5h2.452a.5.5 0 0 1 .353.854l-.834.834A5.751 5.751 0 0 0 12.75 7M7.8 4.024c-.195-.87-1.428-.863-1.616.007l-.02.097a2.65 2.65 0 0 1-2.118 2.066c-.896.159-.896 1.453 0 1.612a2.65 2.65 0 0 1 2.117 2.066l.021.097c.188.87 1.42.877 1.616.007l.025-.113A2.67 2.67 0 0 1 9.95 7.807c.898-.159.898-1.455 0-1.614a2.67 2.67 0 0 1-2.125-2.056z" clip-rule="evenodd" />
                  </svg>
                  <h4 className="font-semibold">Select & Share</h4>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 w-12" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#7b00ff" d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM6 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm5.412 2.4a.632.632 0 0 1 1.176 0l.316.763a5.46 5.46 0 0 0 2.815 2.908l.896.399c.513.228.514.975 0 1.204l-.95.422a5.45 5.45 0 0 0-2.773 2.813l-.308.707a.633.633 0 0 1-1.168 0l-.308-.707a5.45 5.45 0 0 0-2.773-2.813l-.95-.422c-.513-.229-.513-.976 0-1.204l.896-.399a5.46 5.46 0 0 0 2.814-2.908z" />
                  </svg>
                  <h4 className="font-semibold">Create Order</h4>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- WHY AI IS IMPORTANT SECTION --> */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-purple-700 mb-4">Why AI Is Important for Modern Jewellery Businesses</h2>
                <p className="text-gray-600 mb-4">Jewellery businesses deal with thousands of designs, changing prices, fast-moving inventory, and high customer expectations. Traditional systems struggle to keep up with this complexity.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Manual searching wastes time and slows sales</li>
                  <li>Dependency on trained manpower increases cost</li>
                  <li>Delayed decisions lead to missed opportunities</li>
                  <li>Data remains unused instead of driving growth</li>
                </ul>
              </div>

              <div>
                <img src="/ai2.jpg" className="rounded-2xl shadow-lg" alt="AI technology concept" />
              </div>
            </div>
          </section>

          {/* <!-- HOW INBUILT AI HELPS SECTION --> */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-purple-700 mb-10">How Inbuilt AI Inside Optigo ERP Helps Everyday Operations</h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold mb-2">Instant Discovery</h4>
                  <p className="text-sm text-gray-600">AI replaces manual product searching with instant image & text-based discovery.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold mb-2">Faster Sales Cycles</h4>
                  <p className="text-sm text-gray-600">AI-powered catalogs, quotations, and orders reduce sales cycle time drastically.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold mb-2">Smarter Decisions</h4>
                  <p className="text-sm text-gray-600">AI helps businesses act early using insights generated from ERP data.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl shadow">
                  <h4 className="font-semibold mb-2">Secure & Practical AI</h4>
                  <p className="text-sm text-gray-600">AI runs securely inside your ERP using your private business data only.</p>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- UPCOMING AI MODULES --> */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-purple-700 mb-10">Upcoming AI Modules – Built for the Future</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold mb-3">Advanced AI Product Intelligence</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Automatic product recommendations</li>
                    <li>Demand-based design suggestions</li>
                    <li>Smart grouping of fast-moving designs</li>
                    <li>Trend-aware product discovery</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold mb-3">AI Customer Interaction Engine</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>AI chatbot trained on your products</li>
                    <li>Instant replies to customer queries</li>
                    <li>Guided product selection & upselling</li>
                    <li>24×7 intelligent customer support</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
                  <h3 className="text-xl font-semibold mb-3">Predictive AI Reports</h3>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Sales trend forecasting</li>
                    <li>Inventory demand prediction</li>
                    <li>Customer buying behavior analysis</li>
                    <li>Early alerts for slow or fast movers</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- AI VISION FOR JEWELLERY BUSINESS --> */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-purple-700 mb-4">How AI Is Changing the Vision of Jewellery Businesses</h2>
                <p className="text-gray-600 mb-4">AI is transforming jewellery businesses from experience-driven operations into data-driven, intelligent enterprises. Decisions that once depended on instinct are now powered by real-time insights.</p>

                <ul className="space-y-3 text-gray-700">
                  <li>
                    <strong>From Manual to Intelligent:</strong> AI replaces manual searching, reporting, and analysis.
                  </li>
                  <li>
                    <strong>From Reactive to Proactive:</strong> Businesses act early instead of responding late.
                  </li>
                  <li>
                    <strong>From Guesswork to Data:</strong> Every decision is backed by ERP intelligence.
                  </li>
                  <li>
                    <strong>From Local to Scalable:</strong> AI enables expansion without proportional manpower.
                  </li>
                </ul>
              </div>

              <div>
                <img src="/ai3.jpg" className="rounded-2xl shadow-lg" alt="AI future vision" />
              </div>
            </div>
          </section>

          {/* <!-- CTA SECTION --> */}
          <section className="bg-purple-700 py-16 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience AI Inside Your ERP?</h2>
              <p className="text-purple-100 mb-6">Discover how Optigo AI transforms everyday jewellery business operations.</p>
              <a  href="#" onClick={() => setIsModalOpen(true)}  className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100">
                Book a Demo Now
              </a>
            </div>
          </section>

          {/* <!-- FOOTER --> */}
          {/* <!-- SEO CONTENT BLOCK --> */}
          <section className="bg-white py-16 rounded">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-2xl font-bold text-purple-700 mb-4">AI for Jewellery Industry – Built Inside ERP</h2>
              <p className="text-gray-600 mb-4">Optigo AI is a purpose-built artificial intelligence solution designed exclusively for the jewellery industry. Unlike generic AI tools, Optigo AI works securely inside your ERP, enabling image-based product search, text-based discovery, faster order creation, and intelligent sales workflows.</p>
              <p className="text-gray-600 mb-4">Jewellery wholesalers, retailers, manufacturers, and eCommerce businesses use Optigo AI to reduce manual work, speed up sales cycles, and make data-driven decisions using real-time ERP insights.</p>
              <p className="text-gray-600">By combining ERP, eCommerce, and AI in one platform, Optigo helps jewellery businesses scale efficiently without increasing manpower.</p>
            </div>
          </section>
        </main>
    </>
  );
};

export default page;
