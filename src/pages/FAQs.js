import React from 'react';
import FooterScreen from '../pages/Footer';

const FAQsScreen =()=>{
    return(
       
        <div class="bg-indigo-700">
          <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-white">
              Frequently asked questions
            </h2>
            <div class="mt-6 border-t border-indigo-300 border-opacity-25 pt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
                <div>
                  <dt class="text-lg leading-6 font-medium text-white">
                    What&#039;s the best thing about Switzerland?
                  </dt>
                  <dd class="mt-2 text-base text-indigo-200">
                    I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
        
                <div>
                  <dt class="text-lg leading-6 font-medium text-white">
                    Why do you never see elephants hiding in trees?
                  </dt>
                  <dd class="mt-2 text-base text-indigo-200">
                    Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
        
                <div>
                  <dt class="text-lg leading-6 font-medium text-white">
                    How do you make holy water?
                  </dt>
                  <dd class="mt-2 text-base text-indigo-200">
                    You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
        
                <div>
                  <dt class="text-lg leading-6 font-medium text-white">
                    Why can&#039;t you hear a pterodactyl go to the bathroom?
                  </dt>
                  <dd class="mt-2 text-base text-indigo-200">
                    Because the pee is silent. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
        
                <div>
                  <dt class="text-lg leading-6 font-medium text-white">
                    What do you call someone with no body and no nose?
                  </dt>
                  <dd class="mt-2 text-base text-indigo-200">
                    Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
        
                <div>
                  <dt class="text-lg leading-6 font-medium text-white">
                    Why did the invisible man turn down the job offer?
                  </dt>
                  <dd class="mt-2 text-base text-indigo-200">
                    He couldn&#039;t see himself doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <FooterScreen/>
        </div>
        
    )
}
export default FAQsScreen;