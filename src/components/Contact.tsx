import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram, Twitter, CheckCircle2, Headphones } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDates: '',
    numberOfTravelers: '',
    packageType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-gray-900 sm:text-5xl">
            Get In Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next adventure? Contact us today!
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-700 mb-8">
                  Have questions? We're here to help! Reach out to our friendly team and we'll get back to you as soon as possible.
                </p>
              </div>

              <Card className="border-0 shadow-sm bg-white">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 break-words">Mobile: +91-9784354521</p>
                      <p className="text-gray-600 break-words">Landline: +91(291)2980638</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 break-words">globaltravel285@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600 break-words">
                        Global Travel Solution<br />
                        189, Ajeet Colony<br />
                        Circuit House Road<br />
                        Jodhpur, Rajasthan, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="size-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600 break-words">
                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                        Sunday: 10:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Dream Vacation</CardTitle>
                  <p className="text-gray-600">Fill out the form below and our travel experts will create a personalized itinerary for you</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="+91 98765 43210"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="destination">Preferred Destination *</Label>
                        <select
                          id="destination"
                          name="destination"
                          value={formData.destination}
                          onChange={handleChange as any}
                          required
                          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                          <option value="">Select destination</option>
                          <option value="andaman">Andaman Islands</option>
                          <option value="bali">Bali, Indonesia</option>
                          <option value="himalayas">Himalayas</option>
                          <option value="kerala">Kerala</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="travelDates">Preferred Travel Dates</Label>
                        <Input
                          id="travelDates"
                          name="travelDates"
                          type="date"
                          value={formData.travelDates}
                          onChange={handleChange}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="numberOfTravelers">Number of Travelers</Label>
                        <Input
                          id="numberOfTravelers"
                          name="numberOfTravelers"
                          type="number"
                          min="1"
                          value={formData.numberOfTravelers}
                          onChange={handleChange}
                          placeholder="2"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="packageType">Package Type</Label>
                      <select
                        id="packageType"
                        name="packageType"
                        value={formData.packageType}
                        onChange={handleChange as any}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select package type</option>
                        <option value="economy">Economy</option>
                        <option value="standard">Standard</option>
                        <option value="deluxe">Deluxe</option>
                        <option value="custom">Custom</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message">Additional Requirements or Questions</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us about your travel preferences, special requests, or any questions you have..."
                        className="mt-1"
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Note:</strong> By submitting this form, you agree to our privacy policy. 
                        We'll contact you within 24 hours with a customized travel proposal.
                      </p>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Contact Us Section */}
      <section className="py-16 bg-[#2596be]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-white sm:text-4xl mb-4">
              Why Choose Us for Your Travel Planning
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="size-8 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">
                  Our dedicated team is available round the clock to assist you before, during, and after your trip.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="size-8 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">
                  Get personalized travel proposals within 24 hours of submitting your inquiry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="size-8 text-primary" />
                </div>
                <h3 className="text-xl text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600">
                  Our travel experts have years of experience crafting unforgettable journeys tailored to your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">How far in advance should I book my trip?</h3>
                <p className="text-gray-600">
                  We recommend booking at least 2-3 months in advance for domestic trips and 3-6 months for international destinations to get the best deals and availability.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">Do you offer customized packages?</h3>
                <p className="text-gray-600">
                  Yes! We specialize in creating personalized itineraries based on your preferences, budget, and travel style. Just let us know your requirements in the booking form.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">What's included in the package price?</h3>
                <p className="text-gray-600">
                  Our packages typically include accommodation, transportation, guided tours, and some meals. Specific inclusions vary by package and will be clearly outlined in your personalized proposal.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  Cancellation policies vary depending on the destination and package. Generally, cancellations made 30+ days before departure receive a full refund minus processing fees. Contact us for specific policy details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white">
              <CardContent className="p-6">
                <h3 className="text-lg text-gray-900 mb-2">Do you assist with visa applications?</h3>
                <p className="text-gray-600">
                  Yes, we provide complete visa assistance and documentation support for international travel, guiding you through the entire process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connect With Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-gray-900 mb-6">
            Connect With Us
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Follow us on social media for travel inspiration, exclusive deals, and updates on our latest packages.
          </p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a 
              href="#" 
              className="w-14 h-14 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="size-6 text-primary" />
            </a>
            <a 
              href="https://instagram.com/globaltravelsolution" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="size-6 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="size-6 text-primary" />
            </a>
            <a 
              href="#" 
              className="w-14 h-14 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="size-6 text-primary" />
            </a>
          </div>
          
          <p className="text-gray-600">
            Instagram: <a href="https://instagram.com/globaltravelsolution" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">@globaltravelsolution</a>
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl text-gray-900 mb-4">
              Visit Our Office
            </h2>
            <p className="text-gray-600">
              Drop by our office for a personal consultation
            </p>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden bg-white">
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.4282947385!2d73.0243!3d26.2789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f11.5!3m3!1m2!1s0x0%3A0x0!2zMjbCsDE2JzQ0LjAiTiA3M8KwMDEnMjcuNSJF!5e0!3m2!1sen!2sin!4v1234567890&q=189+Ajeet+Colony+Circuit+House+Road+Jodhpur+Rajasthan"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Travel Solution Office Location - 189, Ajeet Colony, Circuit House Road, Jodhpur"
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}