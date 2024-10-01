import React, { useState } from "react";
import "./buy.css";
import war1 from '../../assets/sliders/war1.png';
import war2 from '../../assets/sliders/war2.png';
import war3 from '../../assets/sliders/war3.png';
import war4 from '../../assets/sliders/war4.png';
import war5 from '../../assets/sliders/war5.png';
import war6 from '../../assets/sliders/war6.png';
import war7 from '../../assets/sliders/war7.png';
import war8 from '../../assets/sliders/war8.png';
import war9 from '../../assets/sliders/war9.png';
import war10 from '../../assets/sliders/war10.png';
import war11 from '../../assets/sliders/war11.png';
import war12 from '../../assets/sliders/war12.png';
import war13 from '../../assets/sliders/war13.png';
import war14 from '../../assets/sliders/war14.png';
import lefticon from '../../assets/left-cont.png';
import righticon from '../../assets/right-icon.png';

const Buy = () => {

  const totalPages = 10;
  const [currentPage,setcurrentPage] = useState(0);
  const [currectItem , setCurrentItem] = useState(    {
    image:war1,
    title : ' World War I',
    sin :'(1914–1918)',
    describe :`              World War I claimed 16–20 million lives, including 10 million military and 7 million civilians.
    The war cost an estimated $186 billion in direct costs. The aftermath saw the collapse of major empires 
    and the redrawing of borders, creating lasting ethnic tensions. The Treaty of Versailles destabilized Germany, 
    leading to future conflicts. The war’s destruction of European infrastructure and economies had long-term global impacts.`,

  })



  const Arrray = [
    {
      image:war1,
      title : ' World War I',
      sin :'(1914–1918)',
      describe :`              World War I claimed 16–20 million lives, including 10 million military and 7 million civilians.
      The war cost an estimated $186 billion in direct costs. The aftermath saw the collapse of major empires 
      and the redrawing of borders, creating lasting ethnic tensions. The Treaty of Versailles destabilized Germany, 
      leading to future conflicts. The war’s destruction of European infrastructure and economies had long-term global impacts.`,
  
    },
    {
      image:war2,
      title : 'World War II ',
      sin :'(1939–1945)',
      describe :`           World War II caused 70–85 million deaths, with around 50 million civilians. Financial costs exceeded $1 trillion, and entire cities were devastated. The war reshaped global politics, leading to the Cold War and the creation of the UN. It also saw atrocities like the Holocaust. The economic and social rebuilding process was extensive, with Europe and Asia suffering the most damage.`,
      
    },
    {
      image:war3,
      title : 'Vietnam War  ',
      sin :'(1955–1975)',
      describe :`       The Vietnam War caused 3–4 million deaths, mostly civilians. The U.S. spent around $168 billion ($1 trillion today). It resulted in Vietnam's unification under communism, with lasting political and economic effects. The war left Southeast Asia devastated, and it profoundly affected U.S. politics and society, fueling anti-war movements and distrust in government.`,
      
    },
  
  
    {
      image:war4,
      title : 'Gulf War  ',
      sin :'(1990–1991)',
      describe :`    The Gulf War saw about 100,000–200,000 Iraqi and coalition military deaths. The war cost around $60 billion. Although a swift victory for coalition forces, the destruction of Iraqi infrastructure and sanctions led to severe economic hardship. The war also reshaped Middle Eastern geopolitics and highlighted the reliance on modern warfare technologies.`,
      
    },
    {
      image:war5,
      title : 'Ukraine War  ',
      sin :' (2022–present)',
      describe :`    The Russia-Ukraine war has caused tens of thousands of deaths and displaced millions. The financial cost is estimated in the hundreds of billions, including military expenditures and infrastructure damage. The war has disrupted global food and energy markets, exacerbating inflation worldwide. The destruction of cities and infrastructure in Ukraine has been severe, with long-term rebuilding required, and the war has shifted global geopolitical alliances.`,
      
    },
  
  
    {
      image:war6,
      title : 'Israel-Palestine Conflict  ',
      sin :'(Ongoing)',
      describe :`   The Israel-Palestine conflict, ongoing since the mid-20th century, has resulted in tens of thousands of deaths. The financial costs are immense, with Israel’s military budget and the cost of recurring destruction in Gaza being significant. The conflict has caused deep political and ethnic divisions, continued loss of lives, and destruction of infrastructure, especially in Palestinian territories. The lack of a resolution continues to destabilize the region.`,
      
    },
    {
      image:war7,
      title : 'India-Pakistan Wars   ',
      sin :'(1947–present)',
      describe :`  World War I claimed 16–20 million lives, including 10 million military and 7 million civilians. The war cost an estimated $186 billion in direct costs. The aftermath saw the collapse of major empires and the redrawing of India and Pakistan have fought several wars over Kashmir, with conflicts in 1947, 1965, and 1971 resulting in tens of thousands of deaths. Military spending on both sides has been extensive, straining their economies. The unresolved Kashmir dispute has led to continued military skirmishes and political tension. The wars have caused lasting regional instability, economic challenges in border areas, and a heavily militarized relationship between the two countries.
      , creating lasting ethnic tensions. The Treaty of Versailles destabilized Germany, leading to future conflicts. The war’s destruction of European infrastructure and economies had long-term global impacts.`,
      
    },
    {
      image:war8,
      title : 'Syrian Civil War ',
      sin :' (2011–present)',
      describe :`   The Syrian Civil War has resulted in over 500,000 deaths and displaced millions. The financial toll is estimated at hundreds of billions of dollars, with Syria’s infrastructure nearly destroyed. The war has destabilized the region, fueling extremism and creating a humanitarian crisis. Multiple international powers are involved, prolonging the conflict, and leaving Syria divided and in ruins with widespread human suffering.`,
      
    },
  
    {
      image:war9,
      title : 'Yemen Civil War ',
      sin :' (2014–present)',
      describe :`  The Yemen Civil War has caused over 250,000 deaths, mostly civilians, due to conflict and famine. The financial and human cost has been immense, with the country suffering a near-total collapse of infrastructure. Yemen faces a humanitarian crisis with widespread famine and disease outbreaks. The war has also become a proxy conflict between regional powers Saudi Arabia and Iran, deepening instability in the Middle East.`,
      
    },
    {
      image:war10,
      title : 'Tigray War  ',
      sin :'(2020–2022)',
      describe :` The Tigray War in Ethiopia caused tens of thousands of deaths and displaced millions. The conflict led to widespread famine, atrocities, and massive destruction of infrastructure. The economic costs have been severe, with much of the Tigray region devastated. The war exacerbated ethnic tensions in Ethiopia and caused a humanitarian crisis, with ongoing instability in the region despite a ceasefire.`,
      
    },
    {
      image:war11,
      title : 'Nagorno-Karabakh Conflict ',
      sin :'  (Ongoing)',
      describe :` The Nagorno-Karabakh conflict between Armenia and Azerbaijan has flared up repeatedly, most notably in 2020, causing thousands of deaths. Financial costs have been significant, with both nations spending heavily on military operations. The conflict has displaced thousands and resulted in infrastructure damage in contested regions. The war continues to destabilize the Caucasus, with ongoing tensions over the disputed territory.`,
      
    },
  
    {
      image:war12,
      title : '  War in Afghanistan   ',
      sin :' (2001–2021)',
      describe :`The Afghanistan War, America’s longest conflict, resulted in over 240,000 deaths, including 71,000 civilians and nearly 2,500 U.S. soldiers. The financial cost is estimated at over $2 trillion. The war began as a response to the 9/11 attacks, with the aim of dismantling al-Qaeda and removing the Taliban from power. Although the Taliban was initially ousted, they regained control after the U.S. withdrawal in 2021. Afghanistan remains impoverished, with ongoing instability, severe economic hardship, and a humanitarian crisis resulting from years of conflict.`,
      
    },
  
    
  
  
  
    
  
  ]
  const onPageChange = (page) => {  
    setcurrentPage(page)
    setCurrentItem(Arrray[page])

  };

  const maxDots = 10;




  const getPaginationRange = () => {
    const halfMaxDots = Math.floor(maxDots / 2);
    let startPage = Math.max(currentPage - halfMaxDots, 1);
    let endPage = Math.min(startPage + maxDots - 1, totalPages);

    if (endPage - startPage < maxDots - 1) {
      startPage = Math.max(endPage - maxDots + 1, 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);
  };

    


  return (
    <div className="buy-container">
      <div className="buy-content">
        <div className="buy-war-info">
          <img src={currectItem?.image} className="buy-war-image" alt="World War I" />
          <div className="buy-war-text">
            <h2 className="buy-war-title">
             {currectItem?.title} <span className="buy-war-date">{currectItem?.sin}</span>
            </h2>
            <p className="buy-war-description">
         {
          currectItem?.describe
         }
          </p>
          </div>
        </div>

        <div className="buy-pagination-container">
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="buy-pagination-btn"
          >
            <img src={lefticon} alt="Previous" />
          </button>

          {getPaginationRange().map((page) => (
            <button
              key={page}
              className={`buy-pagination-dot ${page === currentPage ? "active" : ""}`}
              onClick={() => onPageChange(page)}
            >
              •
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
            className="buy-pagination-btn"
          >
            <img src={righticon} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
