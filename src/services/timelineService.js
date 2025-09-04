import timelineSteps from "./timelineData"


export default function timeLineService (targetElement) {

    const container = document.querySelector(targetElement)

    timelineSteps().forEach((step,idx) => {
        const hr = document.createElement('hr')

        const li = document.createElement('li')
        li.style = '--timeline-row-start: 0 !important'
        const timelineMiddle = document.createElement('div')
        timelineMiddle.classList.add('timeline-middle')
        const timeLineMiddleSvg = document.createElement('img')
        const svgString = `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
        >
        <path
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clip-rule="evenodd"
        />
        </svg>`
        timeLineMiddleSvg.src =  `data:image/svg+xml,${encodeURIComponent(svgString)}`;      
        timeLineMiddleSvg.setAttribute('width', "20px")
        timeLineMiddleSvg.setAttribute('height', "20px")

        timelineMiddle.append(timeLineMiddleSvg)
        const timeline = document.createElement('div') 
        timeline.classList.add(`timeline-${step.side}`,'mb-10',`${step.side === "start" ? "md:text-end" : "md:text-start"  }`)

        const time = document.createElement('time')
        time.classList.add('font-mono','italic')
        time.textContent = step.year
        timeline.appendChild(time)

        let title = document.createElement('div')
        title.classList.add('text-lg', 'font-black')
        title.textContent = step.title
        timeline.appendChild(title)
        const p = document.createElement('p')
        p.textContent = step.text
        timeline.appendChild(p)

        if(idx > 0) {
        li.append(hr)
 
        }
        li.append(timelineMiddle)
        li.append(timeline)
        
        li.append(hr)



        


        // timelineStart.classList.add(`timeline-${step.side}`)
        // timelineStart.textContent = step.title
    //     li.append(timelineStart)
   
        container.append(li)
    });
}


const generateElement = (tag,content, attribute) => {

} 