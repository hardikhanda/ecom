import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // State to manage profile dropdown visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  return (
    <nav className="bg-[#1995AD]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between"> {/* Ensure flex and items-center */}
          
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-[#A1D6E2] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={menuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {menuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Logo and links */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="h-16 w-auto" src="logo.png" alt="VoltEdge" />
            </div>
            <div className="hidden sm:ml-6 sm:flex items-center space-x-4"> {/* Flex and items-center */}
              <a href="#" className="rounded-md bg-[#1995AD] px-3 py-2 text-sm font-medium text-white" aria-current="page">
                Shop
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#A1D6E2] hover:text-black">
                Categories
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#A1D6E2] hover:text-black">
                Deals
              </a>
              <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-[#A1D6E2] hover:text-black">
                Support
              </a>
            </div>
          </div>

          {/* Profile and Cart */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Cart Button */}
            <button
              type="button"
              className="relative rounded-full bg-[#1995AD] p-1 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1995AD]"
            >
              <span className="sr-only">View cart</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l1 6h13l1.5-6H5.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM16 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
              </svg>
            </button>

            {/* Profile dropdown */}
            <div className="relative ml-3">
              <button
                type="button"
                onClick={toggleProfileDropdown}
                className="relative flex rounded-full bg-[#1995AD] text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1995AD]"
                id="user-menu-button"
                aria-expanded={profileDropdownOpen ? 'true' : 'false'}
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User profile"
                />
              </button>

              {/* Dropdown menu */}
              {profileDropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A1D6E2]" role="menuitem">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A1D6E2]" role="menuitem">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#A1D6E2]" role="menuitem">
                    Sign out
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <a href="#" className="block rounded-md bg-[#1995AD] px-3 py-2 text-base font-medium text-white">
              Shop
            </a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#A1D6E2] hover:text-black">
              Categories
            </a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#A1D6E2] hover:text-black">
              Deals
            </a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-[#A1D6E2] hover:text-black">
              Support
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
