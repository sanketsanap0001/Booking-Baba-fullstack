import React from "react";
import "./ucss/UFeatures.css";
import { HiOutlineSupport } from "react-icons/hi";
import {
  FaDollarSign,
  FaHeart,
  FaPercentage,
  FaRoad,
  FaSearch,
  FaUsers,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";
interface Props {
  title?: string;
  subtitle?: string;
  travelType?: string;
}
export default function UFeatures(props: Props) {
  return (
    <div>
      <section className="section px-3 px-md-5">
        <h2 className="text-9 fw-600 text-center">{props.title}</h2>
        <p className="lead mb-5 text-center">{props.subtitle}</p>
        <div className="row g-5">
          {props.travelType === "train" ? (
            <>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaPercentage />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Cheapest Price</h3>
                    <p>
                      Always get cheapest price with the best in the industry.
                      So you get the best deal every time!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className=" text-[50px] featureicons">
                        <IoClose />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Easy Cancellation &amp; Refunds</h3>
                    <p>
                      Get instant refund and get any booking fees waived off!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaDollarSign />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>No Booking Charges</h3>
                    <p>
                      No hidden charges, no payment fees, and free customer
                      service. So you get the best deal every time!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaHeart />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Every time, anywhere</h3>
                    <p>
                      Because your trip doesn't end with a ticket, we’re here
                      for you all the way
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : props.travelType === "bus" ? (
            <>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaPercentage />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Cheapest Price</h3>
                    <p>
                      Always get cheapest price with the best in the industry.
                      So you get the best deal every time!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className=" text-[50px] featureicons">
                        <IoClose />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Easy Cancellation &amp; Refunds</h3>
                    <p>
                      Get instant refund and get any booking fees waived off!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaDollarSign />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>No Booking Charges</h3>
                    <p>
                      No hidden charges, no payment fees, and free customer
                      service. So you get the best deal every time!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaHeart />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Every time, anywhere</h3>
                    <p>
                      Because your trip doesn't end with a ticket, we’re here
                      for you all the way
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaSearch />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Quick and Easy Search</h3>
                    <p>
                      We'll find you the best deals available from top bus
                      companies for you to choose from, combining quality and
                      economy.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className=" text-[50px] featureicons">
                        <FaRoad />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>2 Lakh+ Routes</h3>
                    <p>
                      Make your road journeys easier across world with 10000+
                      Operators.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : props.travelType === "hotel" ? (
            <>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaUsers />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Over 10M+ Happy Customers</h3>
                    <p>
                      Book with one of most trusted travel portals in the world
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className=" text-[50px] featureicons">
                        <IoClose />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>Easy Cancellation &amp; Refunds</h3>
                    <p>
                      Get instant refund and get any booking fees waived off!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <FaDollarSign />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3>No Booking Charges</h3>
                    <p>
                      No hidden charges, no payment fees, and free customer
                      service. So you get the best deal every time!
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="featured-box style-3">
                  <div className="featured-box-icon">
                    <div className="feature-i">
                      <div className="featureicons">
                        <HiOutlineSupport />
                      </div>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h3> 24X7 Customer Support</h3>
                    <p>
                      We're here to help. Round the clock support for all your
                      hotel needs
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
}
