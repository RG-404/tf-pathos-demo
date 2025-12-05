import React from "react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";

const Units = () => {
  return (
    <div className="p-8">
      <div className="uppercase mb-5">Units</div>
      <div className="grid grid-cols-3 gap-4">
        <div className="h-72 bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="bg-red-900 text-white px-4 h-12 flex items-center uppercase">
              Blood
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Ready
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Pending
                  </div>
                  <div>21</div>
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Upcoming in 24h
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Capacity
                  </div>
                  <div>80%</div>
                </div>
              </div>

              <label
                htmlFor="phonenumber-input"
                className="flex w-full h-10 mt-5 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text 
                         focus-within:ring-black focus-within:ring-2"
              >
                <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                  <HiOutlineMagnifyingGlass />
                </div>
                <input
                  id="phonenumber-input"
                  className="w-full h-full px-3 outline-none"
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
          <div className="text-sm p-4">0 problems reported</div>
        </div>
        <div className="h-72 bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="bg-purple-900 text-white px-4 h-12 flex items-center uppercase">
              USG: Ultrasound Sonography
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Ready
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Pending
                  </div>
                  <div>21</div>
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Upcoming in 24h
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Capacity
                  </div>
                  <div>80%</div>
                </div>
              </div>

              <label
                htmlFor="phonenumber-input"
                className="flex w-full h-10 mt-5 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text 
                         focus-within:ring-black focus-within:ring-2"
              >
                <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                  <HiOutlineMagnifyingGlass />
                </div>
                <input
                  id="phonenumber-input"
                  className="w-full h-full px-3 outline-none"
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
          <div className="text-sm p-4">0 problems reported</div>
        </div>
        <div className="h-72 bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="bg-neutral-900 text-white px-4 h-12 flex items-center uppercase">
              X-Ray
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Ready
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Pending
                  </div>
                  <div>21</div>
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Upcoming in 24h
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Capacity
                  </div>
                  <div>80%</div>
                </div>
              </div>

              <label
                htmlFor="phonenumber-input"
                className="flex w-full h-10 mt-5 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text 
                         focus-within:ring-black focus-within:ring-2"
              >
                <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                  <HiOutlineMagnifyingGlass />
                </div>
                <input
                  id="phonenumber-input"
                  className="w-full h-full px-3 outline-none"
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
          <div className="text-sm p-4">0 problems reported</div>
        </div>
        <div className="h-72 bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="bg-blue-900 text-white px-4 h-12 flex items-center uppercase">
              MRI: Magnetic resonance imaging
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Ready
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Pending
                  </div>
                  <div>21</div>
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Upcoming in 24h
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Capacity
                  </div>
                  <div>80%</div>
                </div>
              </div>

              <label
                htmlFor="phonenumber-input"
                className="flex w-full h-10 mt-5 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text 
                         focus-within:ring-black focus-within:ring-2"
              >
                <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                  <HiOutlineMagnifyingGlass />
                </div>
                <input
                  id="phonenumber-input"
                  className="w-full h-full px-3 outline-none"
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
          <div className="text-sm p-4">0 problems reported</div>
        </div>
        <div className="h-72 bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl overflow-hidden flex flex-col justify-between">
          <div className="flex flex-col">
            <div className="bg-green-900 text-white px-4 h-12 flex items-center uppercase">
              CT: computed tomography Scan
            </div>
            <div className="p-4">
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Ready
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Pending
                  </div>
                  <div>21</div>
                </div>
              </div>
              <div className="mb-4 flex justify-between">
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Upcoming in 24h
                  </div>
                  <div>21</div>
                </div>
                <div>
                  <div className="uppercase text-xs text-neutral-500">
                    Capacity
                  </div>
                  <div>80%</div>
                </div>
              </div>

              <label
                htmlFor="phonenumber-input"
                className="flex w-full h-10 mt-5 items-center border border-neutral-300 rounded-xl overflow-hidden cursor-text 
                         focus-within:ring-black focus-within:ring-2"
              >
                <div className="aspect-square h-full bg-neutral-300 flex items-center justify-center">
                  <HiOutlineMagnifyingGlass />
                </div>
                <input
                  id="phonenumber-input"
                  className="w-full h-full px-3 outline-none"
                  placeholder="Search"
                />
              </label>
            </div>
          </div>
          <div className="text-sm p-4">0 problems reported</div>
        </div>
        <div className="h-72 bg-linear-to-b from-neutral-100 to-neutral-50 border border-neutral-300 rounded-xl overflow-hidden flex flex-col items-center justify-center text-neutral-400 cursor-pointer">
          + ADD  UNIT
        </div>
      </div>
    </div>
  );
};

export default Units;