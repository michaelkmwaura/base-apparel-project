import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header>
      <image src="base-apparel-project\public\images\logo.svg" alt="logo" />
      </header>

    <div class="">
        <Image class="" width={100} height={100} src="/base-apparel-project\public\images\hero-mobile.jpg" alt="image" />
      </div>
      
      <div class=" px-5 text-center h-auto absolute bottom-0  md:text-left">

        <h1 class="py-5">We're<br /> <span>coming<br /> soon</span><br /></h1>

        <p class="tracking-wide pb-3">Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our launch deals.</p>

        <form class="flex flex-row">
          <input type="email" class=" text-red-200 placeholder-red-200 border-solid border-2 border-red-200 rounded-full px-5 w-full h-12 outline-none " id="email" placeholder="Email address" required />
          <a class="flex justify-center items-center self-end bg-red-200 h-12 w-24 rounded-full left-auto right-80 hover:h-14 active:h-14 duration-700 shadow-2xl cursor-pointer" type="submit" required><svg xmlns="http://www.w3.org/2000/svg" width="12" height="20"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 1l8.836 8.836L1 18.671" /></svg></a>
          <p class="error-msg">Please provide a valid Email</p>
        </form>

        <footer class="">
          <p class="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="#">Michael K. Mwaura</a>.
          </p>
        </footer>
      </div><div class="bg-[url('/images\hero-mobile.jpg')]"></div>
      </>
  )
}
