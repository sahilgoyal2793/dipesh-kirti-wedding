/* eslint-disable @next/next/no-img-element */
import { Countdown } from "@/components/site/countdown"
import { EventIcon } from "@/components/site/event-icon"
import { Gate } from "@/components/site/gate"
import { RsvpForm } from "@/components/site/rsvp-form"
import { Tbd, Val } from "@/components/site/tbd"
import { WeddingFolders } from "@/components/site/wedding-folders"
import { WEDDING, asset } from "@/lib/wedding"

const Rule = () => (
  <svg className="rule" viewBox="0 0 140 14" aria-hidden="true">
    <path d="M0 7h58M82 7h58" stroke="currentColor" strokeWidth="1.2" />
    <path d="M70 1l6 6-6 6-6-6z" fill="currentColor" />
  </svg>
)

export default function Home() {
  return (
    <>
      <Gate />

      <main>
        {/* Hero */}
        <section className="hero">
          <img src={asset("/img/couple_full.jpg")} alt="Dipesh and Kirti together in white and gold, with fairy lights behind them" />
          <div className="wrap">
            <div className="ganesh">॥ श्री गणेशाय नमः ॥</div>
            <h1>Dipesh &amp; Kirti</h1>
            <div className="when">3 &amp; 4 January 2027</div>
            <div className="tag">Pushkar · Rajasthan</div>
          </div>
        </section>

        {/* Save the date */}
        <section>
          <div className="wrap std">
            <div className="arch">
              <img src={asset("/img/couple_close.jpg")} alt="Kirti smiling, her mehndi hands holding Dipesh's arm" />
            </div>
            <div className="std-text">
              <div className="eyebrow">Save the date</div>
              <h2>We&apos;re getting married!</h2>
              <div className="datebar">
                <div className="d">3–4</div>
                <div className="m"><span>January</span><span>2027</span></div>
              </div>
              <p className="venue-line">at <strong>Krishna Hotel &amp; Resort, Pushkar</strong></p>
              <p className="hindi" style={{ fontSize: 20, color: "var(--rose)" }}>आपके आशीर्वाद और साथ के बिना यह जश्न अधूरा है।</p>
              <p>Two days of rituals, music and family in the holy town of Pushkar. We would love you to be there with us.</p>
            </div>
          </div>
        </section>

        {/* Folders */}
        <section className="desk">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">Open a folder</div>
              <h2>Everything in one place</h2>
              <Rule />
            </div>
            <WeddingFolders />
            <p className="hint">Hover to lean · Tap to open</p>
          </div>
        </section>

        {/* Meet the couple */}
        <section className="band">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">Meet the couple</div>
              <h2>दो दिल, एक सफ़र</h2>
              <Rule />
            </div>
            <div className="couple">
              <article className="person">
                <div className="ph tbd-box">Dipesh&apos;s photo (to be added)</div>
                <div className="role">The groom</div>
                <h3>Dipesh</h3>
                <p><Tbd>A few lines about Dipesh: work, city, what he loves. To be added.</Tbd></p>
              </article>
              <article className="person">
                <div className="ph tbd-box">Kirti&apos;s photo (to be added)</div>
                <div className="role">The bride</div>
                <h3>Kirti</h3>
                <p><Tbd>A few lines about Kirti: work, city, what she loves. To be added.</Tbd></p>
              </article>
            </div>
          </div>
        </section>

        {/* Blessings / families */}
        <section>
          <div className="wrap bless">
            <div className="shloka">॥ श्री गणेशाय नमः ॥</div>
            <div className="head" style={{ marginBottom: 0 }}>
              <div className="eyebrow">With the blessings of our parents &amp; elders</div>
              <h2>Our families</h2>
            </div>
            <div className="families">
              <div className="fam">
                <div className="eyebrow">Groom&apos;s family</div>
                <h3><Tbd>Parents&apos; names</Tbd></h3>
                <p><Tbd>Grandparents / family name, city</Tbd></p>
              </div>
              <div className="fam">
                <div className="eyebrow">Bride&apos;s family</div>
                <h3><Tbd>Parents&apos; names</Tbd></h3>
                <p><Tbd>Grandparents / family name, city</Tbd></p>
              </div>
            </div>
            <p className="note">With the blessings of our grandparents and elders, we request the pleasure of your company as Dipesh and Kirti begin their new life together.</p>
          </div>
        </section>

        {/* Celebrations */}
        <section className="band" id="events">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">The wedding celebrations</div>
              <h2>3 &amp; 4 January 2027</h2>
              <p>Krishna Hotel &amp; Resort, Pushkar</p>
            </div>
            <div className="days">
              {WEDDING.days.map((day) => (
                <div className="day" key={day.label}>
                  <h3>{day.label} <span>{day.date}</span></h3>
                  <div className="events">
                    {day.events.map((e, i) => (
                      <article className="event" key={i}>
                        <EventIcon name={e.icon} />
                        <h4><Val value={e.name} placeholder="Function name" /></h4>
                        <div className="t"><Val value={e.time} placeholder="Time TBC" /></div>
                        <div className="where"><Val value={e.where} placeholder="Spot in resort TBC" /></div>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="note-tbd">Function names, timings and spots inside the resort are placeholders until the family confirms the schedule.</p>
          </div>
        </section>

        {/* Venue & travel */}
        <section id="venue">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">Venue &amp; travel</div>
              <h2>Getting to Pushkar</h2>
            </div>
            <div className="venue">
              <div className="venue-card">
                <div className="eyebrow" style={{ color: "#f3dcae" }}>The venue</div>
                <h3>Krishna Hotel &amp; Resort</h3>
                <p>Pushkar, Rajasthan</p>
                <p><Tbd style={{ color: "#f3b98a", borderColor: "#f3b98a" }}>Full address to be added</Tbd></p>
                <div>
                  <a className="btn" href="https://www.google.com/maps/search/?api=1&query=Krishna+Hotel+%26+Resort+Pushkar" target="_blank" rel="noopener">Open in Google Maps</a>
                </div>
              </div>
              <dl className="travel">
                <div><dt>By train</dt><dd>Ajmer Junction is the nearest major station, about 15 km from Pushkar by road.</dd></div>
                <div><dt>By air</dt><dd>Kishangarh Airport (about 45 km) has limited flights. Jaipur International Airport (about 150 km) has the most connections.</dd></div>
                <div><dt>By road</dt><dd>Pushkar is around 3 hours&apos; drive from Jaipur via Ajmer.</dd></div>
                <div><dt>Stay &amp; pickup</dt><dd><Tbd>Room and pickup arrangements for guests, to be confirmed.</Tbd></dd></div>
              </dl>
            </div>
          </div>
        </section>

        {/* Dress code */}
        <section className="band">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">Dress code</div>
              <h2>What to wear</h2>
            </div>
            <div className="dress">
              <div><h3>Ladies</h3><p><Tbd>Dress code to be confirmed</Tbd></p></div>
              <div><h3>Gentlemen</h3><p><Tbd>Dress code to be confirmed</Tbd></p></div>
            </div>
            <p className="note-tbd">Early January nights in Pushkar get cold, so bring a warm shawl or jacket for evening functions.</p>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp">
          <div className="wrap">
            <div className="head">
              <div className="eyebrow">RSVP</div>
              <h2>Will you join us?</h2>
              <p>Kindly reply by <Tbd>RSVP date to be confirmed</Tbd></p>
            </div>
            <RsvpForm />
          </div>
        </section>

        {/* Countdown */}
        <section className="count">
          <div className="wrap" style={{ display: "grid", gap: 18, justifyItems: "center" }}>
            <div className="eyebrow" style={{ color: "#f3dcae" }}>Counting down to</div>
            <h2>3 January 2027</h2>
            <Countdown start={WEDDING.start} />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <div className="mono">D &amp; K</div>
          <p>Dipesh &amp; Kirti · 3–4 January 2027 · Krishna Hotel &amp; Resort, Pushkar</p>
          <p className="hash">#DipeshWedsKirti</p>
          <p className="hindi">शादी में ज़रूर आइए 🙏</p>
        </div>
      </footer>
    </>
  )
}
