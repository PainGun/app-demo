import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  imports: [],
  template: `
   

   <div role="status">
    <svg aria-hidden="true" 
         class="w-8 h-8 text-[var(--mat-sys-secondary)] animate-spin fill-[var(--mat-sys-primary)]" 
         viewBox="0 0 100 101" 
         fill="none" 
         xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" 
              fill="currentColor"/>
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
              fill="currentFill"/>
    </svg>
    <span class="sr-only">Loading...</span>
</div>


<div data-dial-init class="fixed end-6 bottom-6 group">
    <div id="speed-dial-menu-default" class="flex flex-col items-center hidden mb-4 space-y-2">
        <!-- Botón Share -->
        <button type="button" 
                data-tooltip-target="tooltip-share" 
                data-tooltip-placement="left" 
                class="flex justify-center items-center w-[52px] h-[52px] text-[var(--mat-sys-secondary)] hover:text-[var(--mat-sys-primary)] bg-[var(--mat-sys-surface)] rounded-full border border-[var(--mat-sys-primary)] shadow-xs hover:bg-[var(--mat-sys-primary-container)] focus:ring-4 focus:ring-[var(--mat-sys-primary)] focus:outline-none">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z"/>
            </svg>
            <span class="sr-only">Share</span>
        </button>
        <!-- Tooltip Share -->
        <div id="tooltip-share" role="tooltip" 
             class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-[var(--mat-sys-on-primary)] transition-opacity duration-300 bg-[var(--mat-sys-primary)] rounded-lg shadow-xs opacity-0 tooltip">
            Share
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <!-- Botón Print -->
        <button type="button" 
                data-tooltip-target="tooltip-print" 
                data-tooltip-placement="left" 
                class="flex justify-center items-center w-[52px] h-[52px] text-[var(--mat-sys-secondary)] hover:text-[var(--mat-sys-primary)] bg-[var(--mat-sys-surface)] rounded-full border border-[var(--mat-sys-primary)] shadow-xs hover:bg-[var(--mat-sys-primary-container)] focus:ring-4 focus:ring-[var(--mat-sys-primary)] focus:outline-none">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 20h10a1 1 0 0 0 1-1v-5H4v5a1 1 0 0 0 1 1Z"/>
                <path d="M18 7H2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-1-2V2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3h14Z"/>
            </svg>
            <span class="sr-only">Print</span>
        </button>
        <!-- Tooltip Print -->
        <div id="tooltip-print" role="tooltip" 
             class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-[var(--mat-sys-on-primary)] transition-opacity duration-300 bg-[var(--mat-sys-primary)] rounded-lg shadow-xs opacity-0 tooltip">
            Print
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <!-- Botón Download -->
        <button type="button" 
                data-tooltip-target="tooltip-download" 
                data-tooltip-placement="left" 
                class="flex justify-center items-center w-[52px] h-[52px] text-[var(--mat-sys-secondary)] hover:text-[var(--mat-sys-primary)] bg-[var(--mat-sys-surface)] rounded-full border border-[var(--mat-sys-primary)] shadow-xs hover:bg-[var(--mat-sys-primary-container)] focus:ring-4 focus:ring-[var(--mat-sys-primary)] focus:outline-none">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Download</span>
        </button>
        <!-- Tooltip Download -->
        <div id="tooltip-download" role="tooltip" 
             class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-[var(--mat-sys-on-primary)] transition-opacity duration-300 bg-[var(--mat-sys-primary)] rounded-lg shadow-xs opacity-0 tooltip">
            Download
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>

        <!-- Botón Copy -->
        <button type="button" 
                data-tooltip-target="tooltip-copy" 
                data-tooltip-placement="left" 
                class="flex justify-center items-center w-[52px] h-[52px] text-[var(--mat-sys-secondary)] hover:text-[var(--mat-sys-primary)] bg-[var(--mat-sys-surface)] rounded-full border border-[var(--mat-sys-primary)] shadow-xs hover:bg-[var(--mat-sys-primary-container)] focus:ring-4 focus:ring-[var(--mat-sys-primary)] focus:outline-none">
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"/>
                <path d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"/>
            </svg>
            <span class="sr-only">Copy</span>
        </button>
        <!-- Tooltip Copy -->
        <div id="tooltip-copy" role="tooltip" 
             class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-[var(--mat-sys-on-primary)] transition-opacity duration-300 bg-[var(--mat-sys-primary)] rounded-lg shadow-xs opacity-0 tooltip">
            Copy
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>

    <!-- Botón principal del speed dial -->
    <button type="button" 
            data-dial-toggle="speed-dial-menu-default" 
            aria-controls="speed-dial-menu-default" 
            aria-expanded="false" 
            class="flex items-center justify-center text-[var(--mat-sys-on-primary)] bg-[var(--mat-sys-primary)] rounded-full w-14 h-14 hover:bg-[var(--mat-sys-primary-container)] focus:ring-4 focus:ring-[var(--mat-sys-primary)] focus:outline-none">
        <svg class="w-5 h-5 transition-transform group-hover:rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
        </svg>
        <span class="sr-only">Open actions menu</span>
    </button>
</div>


  `,
  styles: ``
})
export class CalendarioComponent {

}
