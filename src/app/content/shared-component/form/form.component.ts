import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  template: `

<form class="max-w-md mx-auto">
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" 
             class="block py-2.5 px-0 w-full text-sm text-[var(--mat-sys-on-primary)] bg-transparent border-0 border-b-2 border-[var(--mat-sys-primary)] appearance-none focus:outline-none focus:ring-0 focus:border-[var(--mat-sys-primary)] peer" 
             placeholder=" " required />
      <label for="floating_email" 
             class="peer-focus:font-medium absolute text-sm text-[var(--mat-sys-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[var(--mat-sys-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Email address
      </label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" 
             class="block py-2.5 px-0 w-full text-sm text-[var(--mat-sys-on-primary)] bg-transparent border-0 border-b-2 border-[var(--mat-sys-primary)] appearance-none focus:outline-none focus:ring-0 focus:border-[var(--mat-sys-primary)] peer" 
             placeholder=" " required />
      <label for="floating_password" 
             class="peer-focus:font-medium absolute text-sm text-[var(--mat-sys-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[var(--mat-sys-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Password
      </label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" 
             class="block py-2.5 px-0 w-full text-sm text-[var(--mat-sys-on-primary)] bg-transparent border-0 border-b-2 border-[var(--mat-sys-primary)] appearance-none focus:outline-none focus:ring-0 focus:border-[var(--mat-sys-primary)] peer" 
             placeholder=" " required />
      <label for="floating_repeat_password" 
             class="peer-focus:font-medium absolute text-sm text-[var(--mat-sys-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[var(--mat-sys-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Confirm password
      </label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" 
               class="block py-2.5 px-0 w-full text-sm text-[var(--mat-sys-on-primary)] bg-transparent border-0 border-b-2 border-[var(--mat-sys-primary)] appearance-none focus:outline-none focus:ring-0 focus:border-[var(--mat-sys-primary)] peer" 
               placeholder=" " required />
        <label for="floating_first_name" 
               class="peer-focus:font-medium absolute text-sm text-[var(--mat-sys-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[var(--mat-sys-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            First name
        </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" 
               class="block py-2.5 px-0 w-full text-sm text-[var(--mat-sys-on-primary)] bg-transparent border-0 border-b-2 border-[var(--mat-sys-primary)] appearance-none focus:outline-none focus:ring-0 focus:border-[var(--mat-sys-primary)] peer" 
               placeholder=" " required />
        <label for="floating_last_name" 
               class="peer-focus:font-medium absolute text-sm text-[var(--mat-sys-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[var(--mat-sys-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Last name
        </label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" 
               class="block py-2.5 px-0 w-full text-sm text-[var(--mat-sys-on-primary)] bg-transparent border-0 border-b-2 border-[var(--mat-sys-primary)] appearance-none focus:outline-none focus:ring-0 focus:border-[var(--mat-sys-primary)] peer" 
               placeholder=" " required />
        <label for="floating_phone" 
               class="peer-focus:font-medium absolute text-sm text-[var(--mat-sys-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[var(--mat-sys-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Phone number (123-456-7890)
        </label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" 
               class="block py-2.5 px-0 w-full text-sm text-[var(--mat-sys-on-primary)] bg-transparent border-0 border-b-2 border-[var(--mat-sys-primary)] appearance-none focus:outline-none focus:ring-0 focus:border-[var(--mat-sys-primary)] peer" 
               placeholder=" " required />
        <label for="floating_company" 
               class="peer-focus:font-medium absolute text-sm text-[var(--mat-sys-secondary)] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[var(--mat-sys-primary)] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Company (Ex. Google)
        </label>
    </div>
  </div>
  <button type="submit" 
          class="text-[var(--mat-sys-on-primary)] bg-[var(--mat-sys-primary)] hover:bg-[var(--mat-sys-primary-container)] focus:ring-4 focus:outline-none focus:ring-[var(--mat-sys-primary)] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
      Submit
  </button>
</form>

  `,
  styles: ``
})
export class FormComponent {

}
