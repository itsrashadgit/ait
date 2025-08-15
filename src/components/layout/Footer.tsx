import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <a href="/" className="p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="60" viewBox="0 0 510 283" version="1.1" alt="ait-logo" title="Aroma Information Technology"><path d="M 412 9.519 C 398.908 11.142, 388.811 13.173, 373.763 17.210 C 360.465 20.778, 358.474 22.262, 371.176 19.139 C 386.827 15.290, 394.101 14.521, 414.500 14.563 C 429.803 14.593, 436.465 15.023, 442.867 16.391 C 464.881 21.096, 480.593 31.496, 487.281 45.787 C 493.285 58.618, 492.062 72.694, 483.473 89.597 C 477.164 102.015, 474.548 105.537, 462.087 118.384 C 456.814 123.820, 453.175 127.902, 454 127.455 C 455.958 126.393, 461.994 121.911, 464.039 120 C 464.922 119.175, 467.187 117.115, 469.072 115.423 C 472.272 112.551, 480.450 103.772, 484.107 99.283 C 491.148 90.642, 499.656 75.132, 502.090 66.500 C 502.866 63.750, 503.488 58.078, 503.474 53.896 C 503.451 47.174, 503.020 45.425, 499.756 38.821 C 491.050 21.206, 474.156 12.210, 443.789 9.020 C 431.762 7.757, 425.408 7.856, 412 9.519 M 419.250 51.689 C 420.212 51.941, 421.788 51.941, 422.750 51.689 C 423.712 51.438, 422.925 51.232, 421 51.232 C 419.075 51.232, 418.288 51.438, 419.250 51.689 M 424.250 82.716 C 425.762 82.945, 428.238 82.945, 429.750 82.716 C 431.262 82.487, 430.025 82.300, 427 82.300 C 423.975 82.300, 422.738 82.487, 424.250 82.716 M 79.115 148.393 C 77.803 149.120, 77.180 149.993, 77.731 150.334 C 78.282 150.674, 79.538 150.063, 80.521 148.976 C 82.601 146.679, 82.376 146.586, 79.115 148.393 M 56.247 162.250 C 53.596 164.588, 49.705 167.850, 47.600 169.500 C 42.719 173.325, 32.479 183.902, 26.785 191 C 13.306 207.802, 8.035 220.217, 8.012 235.212 C 7.977 257.886, 23.116 271.344, 53.916 276.019 C 63.123 277.416, 88.498 276.860, 100 275.008 C 107.924 273.732, 122.886 270.396, 129 268.542 C 131.475 267.792, 134.791 266.891, 136.368 266.540 C 137.945 266.190, 139.065 265.732, 138.857 265.523 C 138.648 265.315, 135.333 265.809, 131.489 266.621 C 103.224 272.592, 70.841 272.375, 52.725 266.093 C 37.507 260.816, 28.725 254.109, 24.231 244.331 C 14.241 222.593, 24.243 195.814, 53.209 166.750 C 58.005 161.938, 61.735 158, 61.498 158 C 61.261 158, 58.898 159.912, 56.247 162.250" stroke="none" fill="#de78f2" fill-rule="evenodd"/><path d="M 403.500 18.049 C 380.583 20.105, 358.660 24.690, 336.930 31.970 C 326.092 35.601, 312.729 41.063, 313.296 41.629 C 313.516 41.849, 316.577 41.139, 320.098 40.052 C 350.082 30.793, 391.682 25.957, 415.561 28.952 C 440.420 32.071, 458.286 41.711, 465.187 55.728 C 468.189 61.825, 468.458 63.158, 468.462 71.936 C 468.466 82.607, 466.415 90.389, 460.890 100.659 C 456.534 108.755, 446.364 121.947, 436.934 131.733 C 432.570 136.262, 429 140.451, 429 141.042 C 429 141.634, 428.601 141.871, 428.113 141.570 C 427.626 141.269, 426.671 141.692, 425.991 142.511 C 423.162 145.920, 427.350 143.581, 436.152 136.838 C 449.299 126.766, 468.588 107.170, 474.850 97.525 C 477.698 93.138, 481.450 85.938, 483.188 81.525 C 485.930 74.559, 486.352 72.246, 486.387 64 C 486.420 56.384, 485.975 53.361, 484.143 48.753 C 479.815 37.867, 468.749 28.494, 454.281 23.463 C 441.284 18.943, 419.464 16.617, 403.500 18.049 M 262.500 50.662 C 254.787 54.728, 251.353 61.442, 252.299 70.606 C 253.540 82.635, 263.977 89.884, 275.928 87.017 C 292.140 83.128, 294.939 58.621, 280.039 51.020 C 275.231 48.567, 266.800 48.395, 262.500 50.662 M 355.750 51.760 L 311 52.020 311 66.943 C 311 80.308, 311.183 81.915, 312.750 82.338 C 313.712 82.597, 325.975 82.841, 340 82.878 C 354.025 82.915, 365.837 82.958, 366.250 82.973 C 366.663 82.988, 367 117.376, 367 159.391 L 367 235.781 370.507 236.191 C 372.436 236.416, 380.315 236.554, 388.016 236.498 L 402.016 236.396 402.032 160.243 C 402.043 104.927, 402.355 83.899, 403.172 83.394 C 403.791 83.011, 415.593 82.610, 429.399 82.503 C 443.204 82.396, 455.074 82.239, 455.776 82.154 C 456.762 82.035, 456.989 78.532, 456.776 66.750 L 456.500 51.500 428.500 51.500 C 413.100 51.500, 380.363 51.617, 355.750 51.760 M 148.620 57.961 L 132.741 58.500 123.317 79.500 C 118.134 91.050, 108.570 112.425, 102.064 127 C 95.557 141.575, 82.581 170.375, 73.227 191 C 57.240 226.250, 53 235.801, 53 236.563 C 53 236.739, 61.184 236.797, 71.187 236.691 L 89.373 236.500 100.735 210.500 C 106.984 196.200, 115.313 177.300, 119.243 168.500 C 123.173 159.700, 131.426 140.817, 137.584 126.537 C 143.741 112.257, 149.167 100.444, 149.641 100.286 C 150.116 100.128, 153.623 107.761, 157.436 117.249 C 161.249 126.737, 167.885 142.460, 172.184 152.188 C 176.483 161.917, 180 170.129, 180 170.438 C 180 170.747, 170.820 171, 159.600 171 L 139.200 171 134.100 183.844 C 131.295 190.908, 129 197.444, 129 198.369 C 129 199.912, 131.664 200.045, 161.179 199.972 L 193.358 199.893 199.730 215.196 C 203.234 223.613, 206.721 231.908, 207.477 233.629 L 208.853 236.759 226.443 236.928 C 236.118 237.021, 244.463 236.832, 244.986 236.508 C 246.589 235.518, 241.661 224.074, 210.588 156.625 C 199.408 132.356, 187.548 106.425, 184.233 99 C 170.820 68.956, 165.232 56.931, 164.815 57.211 C 164.642 57.328, 157.354 57.665, 148.620 57.961 M 255 160.318 C 255 221.755, 255.004 221.794, 262.160 229.558 C 268.230 236.143, 274.829 238.289, 287.500 237.798 C 302.282 237.226, 302 237.524, 302 222.465 L 302 210 297.844 210 C 294.930 210, 292.690 209.238, 290.344 207.449 L 287 204.898 287 155.449 L 287 106 271 106 L 255 106 255 160.318 M 71 154.348 C 62.366 161.172, 42.957 181.771, 37.698 189.692 C 16.806 221.161, 20.002 247.080, 46.314 259.571 C 67.487 269.622, 105.115 270.145, 141.409 260.892 C 153.192 257.889, 171.570 251.639, 179.500 247.939 C 183.350 246.142, 186.794 244.732, 187.154 244.804 C 187.514 244.877, 188.285 244.362, 188.867 243.660 C 189.519 242.875, 185.033 243.660, 177.213 245.701 C 152.878 252.052, 126.559 256, 108.550 256 C 74.646 256, 48.597 244.180, 43.445 226.458 C 38.161 208.282, 48.985 182.146, 71.351 159.082 C 77.413 152.829, 79.252 149.999, 77.250 150.001 C 76.838 150.001, 74.025 151.957, 71 154.348" stroke="none" fill="#c305f3" fill-rule="evenodd"/></svg>
              </a>
              <h3 className="text-lg font-semibold">Aroma Information Technology</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              AiT - Your trusted partner for comprehensive IT solutions and digital transformation services.
            </p>
            {/*<div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@aromait.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+8801717643014</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+8801712836388</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  235/1, West Rampura<br />
                  Wapda Road<br />
                  Dhaka-1219, Bangladesh.
                </span>
              </div>
            </div>*/}
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/web-development">Web Development</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/mobile-app-development">Mobile App Development</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/digital-marketing">Digital Marketing</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/data-management">Data Management</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/system-integration">System Integration</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/business-intelligence">Business Intelligence</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/it-consulting">IT Consulting</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/cloud-solutions">Cloud Solutions</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/custom-development">Custom Development</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/cyber-security">Cyber Security</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/it-consulting-features">IT Consulting Features</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/performance-optimization">Performance Optimization</Link>
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                <Link to="/team-collaboration">Team Collaboration</Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white cursor-pointer transition-colors"><Link to="/about">About Us</Link></li>              
              <li className="hover:text-white cursor-pointer transition-colors"><Link to="/team">Our Team</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link to="/case-studies">Case Studies</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link to="/blog">Blog</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link to="/careers">Careers</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="hover:text-white cursor-pointer transition-colors"><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          {/*<div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">info@aromait.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">+8801717643014</span>
                <span className="text-gray-300">+8801712836388</span>

              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  235/1, West Rampura<br />
                  Wapda Road<br />
                  Dhaka, Bangladesh.
                </span>
              </div>
            </div>
          </div>*/}
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} <Link to="/">AromaIT.com</Link> - Aroma Information Technology | All rights reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm"><Link to="/terms-of-service">Terms of Service</Link></span>
              <span className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm"><Link to="/privacy-policy">Privacy Policy</Link></span>
              <span className="text-gray-400 hover:text-white cursor-pointer transition-colors text-sm"><Link to="/cookie-policy">Cookie Policy</Link></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
