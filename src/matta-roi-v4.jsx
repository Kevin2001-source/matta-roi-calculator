import { useState, useEffect, useRef } from "react";

const LOGO_SRC = "data:image/png;base64,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";

const SECTOR_DEFAULTS = {
  automotive:    { defectRate: 3.5, costPerDefect: 85,  label: "Automotive",          benchmark: "Automotive plants typically see 37% defect reduction within 60 days. Matta is already deployed across EV stators and precision fasteners." },
  electronics:   { defectRate: 2.8, costPerDefect: 45,  label: "Electronics",         benchmark: "Electronics manufacturers report up to 99.2% detection accuracy on PCBs and sensor wafers, surpassing human inspection at high speed." },
  defence:       { defectRate: 1.5, costPerDefect: 320, label: "Defence & Aerospace",  benchmark: "In high-value aerospace components, catching a single defect early can save tens of thousands in downstream rework and certification costs." },
  apparel:       { defectRate: 4.5, costPerDefect: 18,  label: "Apparel & Textiles",   benchmark: "Matta is deployed in waterproof garment production. Fabric defect rates above 4% are common - AI catches anomalies humans miss on fast-moving lines." },
  food_beverage: { defectRate: 2.0, costPerDefect: 12,  label: "Food & Beverage",      benchmark: "Matta runs high-speed bottling inspection for a global drinks company. Packaging errors caught before distribution protect brand and compliance." },
  pharma:        { defectRate: 1.2, costPerDefect: 180, label: "Pharmaceuticals",      benchmark: "Pharma manufacturers using AI inspection cut inspection cycles by 30% and reduce recalls, with full audit traceability built in." },
  custom:        { defectRate: 3.0, costPerDefect: 50,  label: "Custom / Other",       benchmark: "Across all sectors, manufacturers deploying AI quality control typically achieve full ROI within 6-12 months of deployment." },
};

const MATTA = {
  defectReductionPct:   0.37,
  detectionAccuracy:    99.1,
  inspectorRedeployPct: 0.4,
  annualPlatformCost:   48000,
};

const CURRENCIES = {
  GBP: { symbol: "£", rate: 1,    label: "GBP £" },
  USD: { symbol: "$", rate: 1.27, label: "USD $" },
  EUR: { symbol: "€", rate: 1.17, label: "EUR €" },
};

function fmtC(n, sym) {
  const abs = Math.abs(n);
  if (abs >= 1000000) return `${sym}${(n / 1000000).toFixed(1)}M`;
  if (abs >= 1000)    return `${sym}${(n / 1000).toFixed(0)}K`;
  return `${sym}${Math.round(n).toLocaleString()}`;
}

function useAnimatedValue(target) {
  const [val, setVal] = useState(target);
  const prev = useRef(target);
  useEffect(() => {
    const from = prev.current;
    const to = target;
    prev.current = target;
    if (from === to) return;
    let frame, start;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 500, 1);
      setVal(from + (to - from) * (1 - Math.pow(1 - p, 3)));
      if (p < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [target]);
  return val;
}

function SavingsHero({ value, sym }) {
  const animated = useAnimatedValue(Math.max(0, value));
  const display = animated >= 1000000
    ? `${sym}${(animated / 1000000).toFixed(2)}M`
    : animated >= 1000
    ? `${sym}${(animated / 1000).toFixed(0)}K`
    : `${sym}${Math.round(animated).toLocaleString()}`;
  return <span>{display}</span>;
}

function Bar({ label, before, after, sym }) {
  const max = Math.max(before, after, 1);
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: "#6B6B7A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8, fontWeight: 500 }}>
        {label}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        {[
          { key: "before", val: before, color: "#C97060", label: "Current" },
          { key: "after",  val: after,  color: "#4A7A65", label: "+ Matta" },
        ].map(({ key, val, color, label: bl }) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 52, fontSize: 10, color: "#8A8A9A", flexShrink: 0, letterSpacing: "0.04em" }}>{bl}</div>
            <div style={{ flex: 1, background: "#DEDAD2", height: 26, overflow: "hidden" }}>
              <div style={{
                width: `${(val / max) * 100}%`, height: "100%", background: color,
                transition: "width 0.6s cubic-bezier(0.16,1,0.3,1)",
                display: "flex", alignItems: "center", justifyContent: "flex-end",
                paddingRight: 8, minWidth: val > 0 ? 52 : 0,
              }}>
                <span style={{ fontSize: 10, color: "#fff", fontWeight: 600 }}>{fmtC(val, sym)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MattaROI() {
  const [sector, setSector]         = useState("automotive");
  const [volume, setVolume]         = useState(500000);
  const [defectRate, setDefectRate] = useState(3.5);
  const [costPerDefect, setCost]    = useState(85);
  const [inspectors, setInspectors] = useState(4);
  const [salary, setSalary]         = useState(35000);
  const [currency, setCurrency]     = useState("GBP");
  const [showAss, setShowAss]       = useState(false);
  const [copied, setCopied]         = useState(false);
  const [errors, setErrors]         = useState({});

  const sym  = CURRENCIES[currency].symbol;
  const rate = CURRENCIES[currency].rate;

  useEffect(() => {
    if (sector !== "custom") {
      setDefectRate(SECTOR_DEFAULTS[sector].defectRate);
      setCost(SECTOR_DEFAULTS[sector].costPerDefect);
    }
  }, [sector]);

  useEffect(() => {
    const e = {};
    if (volume < 1000)      e.volume     = "Volume seems very low";
    if (defectRate <= 0)    e.defectRate = "Must be greater than 0";
    if (defectRate > 30)    e.defectRate = "Above 30% is unusually high";
    if (costPerDefect <= 0) e.cost       = "Must be greater than 0";
    setErrors(e);
  }, [volume, defectRate, costPerDefect]);

  const defects      = volume * (defectRate / 100);
  const defectCost   = defects * costPerDefect * rate;
  const inspCost     = inspectors * salary * rate;
  const currentTotal = defectCost + inspCost;
  const mDefects     = defects * (1 - MATTA.defectReductionPct);
  const mDefectCost  = mDefects * costPerDefect * rate;
  const redeployed   = Math.floor(inspectors * MATTA.inspectorRedeployPct);
  const mInspCost    = (inspectors - redeployed) * salary * rate;
  const mPlatform    = MATTA.annualPlatformCost * rate;
  const mattaTotal   = mDefectCost + mInspCost + mPlatform;
  const savings      = currentTotal - mattaTotal;
  const payback      = savings > 0 ? Math.ceil((mPlatform / savings) * 12) : 999;

  const handleCopy = () => {
    const text = `Matta ROI Estimate - ${SECTOR_DEFAULTS[sector].label}
Production volume: ${volume.toLocaleString()} units/yr
Defect rate: ${defectRate}%  |  Cost per defect: ${sym}${costPerDefect}
QC inspectors: ${inspectors} @ ${sym}${salary.toLocaleString()}/yr

Current cost of quality: ${fmtC(currentTotal, sym)}/yr
With Matta: ${fmtC(mattaTotal, sym)}/yr
Annual saving: ${fmtC(savings, sym)}
Payback: ${payback <= 12 ? `~${payback} months` : `~${(payback / 12).toFixed(1)} years`}
3-year net saving: ${fmtC(Math.max(0, savings * 3 - mPlatform * 3), sym)}

Estimates based on industry benchmarks. Contact hello@matta.ai for a full assessment.`;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const card = { background: "#FAFAF7", border: "1px solid #D8D4CC", padding: 28, marginBottom: 16 };
  const inp  = { width: "100%", padding: "9px 12px", background: "#FAFAF7", border: "1px solid #C4C0B4", color: "#1C1C2E", fontSize: 14, fontFamily: "inherit", outline: "none", boxSizing: "border-box" };
  const eInp = { ...inp, border: "1px solid #C97060", background: "#FDF5F3" };
  const lbl  = { display: "block", fontSize: 10, color: "#6B6B7A", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500 };
  const eTxt = { fontSize: 10, color: "#C97060", marginTop: 4 };
  const pill = { display: "inline-block", padding: "3px 10px", border: "1px solid #C4C0B4", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4A4A5A", fontWeight: 500 };

  return (
    <div style={{ minHeight: "100vh", background: "#E8E4DC", color: "#1C1C2E", fontFamily: "'Suisse Intl','Helvetica Neue',Arial,sans-serif", overflowX: "hidden" }}>
      <style>{`
        * { box-sizing: border-box; }
        input[type=range] { accent-color: #1C1C2E; width: 100%; margin-top: 8px; }
        select option { background: #FAFAF7; color: #1C1C2E; }
        input:focus, select:focus { border-color: #1C1C2E !important; outline: none; }
        ::selection { background: #E8A090; color: #1C1C2E; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .btog { background:none; border:1px solid #C4C0B4; color:#4A4A5A; font-size:11px; letter-spacing:0.08em; text-transform:uppercase; font-family:inherit; cursor:pointer; padding:6px 14px; transition:all 0.15s; }
        .btog:hover, .btog.on { background:#1C1C2E; color:#E8E4DC; border-color:#1C1C2E; }
        @media (max-width: 768px) {
          .g2  { grid-template-columns: 1fr !important; }
          .g2m { grid-template-columns: 1fr 1fr !important; }
          .h1  { font-size: 28px !important; line-height: 1.2 !important; }
          .nav { padding: 12px 16px !important; flex-wrap: wrap; gap: 8px; }
          .navr { flex-wrap: wrap !important; gap: 6px !important; }
          .main { padding: 24px 16px 60px !important; }
          .hero { padding: 32px 16px 28px !important; }
          .cta  { flex-direction: column !important; gap: 14px !important; }
          .ctab { flex-direction: column !important; width: 100% !important; margin-left: 0 !important; }
          .cb   { width: 100% !important; text-align: center !important; }
          .bign { font-size: 40px !important; }
          .foot { flex-direction: column !important; gap: 8px !important; text-align: center !important; padding: 16px 20px !important; }
        }
      `}</style>

      {/* Nav */}
      <nav className="nav" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 40px", borderBottom: "1px solid #C4C0B4", background: "#E8E4DC", position: "sticky", top: 0, zIndex: 10 }}>
        <img src={LOGO_SRC} alt="Matta" style={{ height: 36, width: "auto" }} />
        <div className="navr" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex" }}>
            {Object.entries(CURRENCIES).map(([k, v]) => (
              <button key={k} className={`btog${currency === k ? " on" : ""}`}
                onClick={() => setCurrency(k)}
                style={{ borderRadius: 0, borderRight: k !== "EUR" ? "none" : undefined }}>
                {v.label}
              </button>
            ))}
          </div>
          <div style={{ padding: "8px 18px", background: "#1C1C2E", color: "#E8E4DC", fontSize: 13, fontWeight: 500 }}>
            ROI Estimator
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="hero" style={{
        padding: "64px 40px 48px", borderBottom: "1px solid #C4C0B4",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32'%3E%3Ctext x='10' y='20' font-size='14' fill='rgba(100%2C95%2C85%2C0.22)' font-family='Arial'%3E%2B%3C/text%3E%3C/svg%3E")`,
        backgroundSize: "32px 32px",
      }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          <span style={pill}>Factory Economics</span>
          <span style={pill}>Quality Control</span>
        </div>
        <h1 className="h1" style={{ fontSize: 52, fontWeight: 400, lineHeight: 1.1, margin: "0 0 16px", letterSpacing: "-0.025em", maxWidth: 700 }}>
          What is poor quality<br /><em style={{ fontStyle: "italic", fontWeight: 300 }}>actually</em> costing your factory?
        </h1>
        <p style={{ fontSize: 16, color: "#5A5A6A", maxWidth: 560, lineHeight: 1.6, margin: "0 0 24px", fontWeight: 300 }}>
          Input your production data. See the financial impact of deploying Matta - grounded in industry benchmarks.
        </p>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px", background: "rgba(28,28,46,0.06)", border: "1px solid #C4C0B4" }}>
          <div style={{ width: 7, height: 7, background: "#4A7A65", borderRadius: "50%", flexShrink: 0 }} />
          <span style={{ fontSize: 12, color: "#4A4A5A", letterSpacing: "0.04em" }}>300+ factories in Matta's pipeline · new installation every 2 weeks</span>
        </div>
      </div>

      {/* Main grid */}
      <div className="main g2" style={{ maxWidth: 1160, margin: "0 auto", padding: "40px 40px 80px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>

        {/* LEFT */}
        <div>
          <div style={card}>
            <div style={{ fontSize: 11, color: "#6B6B7A", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500, marginBottom: 24 }}>Your Factory</div>

            <div style={{ marginBottom: 20 }}>
              <label style={lbl}>Sector</label>
              <select value={sector} onChange={e => setSector(e.target.value)} style={{
                ...inp, cursor: "pointer", appearance: "none",
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236B6B7A' strokeWidth='1.5' fill='none'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
              }}>
                {Object.entries(SECTOR_DEFAULTS).map(([k, v]) => <option key={k} value={k}>{v.label}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={lbl}>Annual Production Volume</label>
              <input type="text" value={volume.toLocaleString()}
                onChange={e => { const v = parseInt(e.target.value.replace(/\D/g, "")); if (!isNaN(v)) setVolume(v); }}
                style={errors.volume ? eInp : inp} />
              {errors.volume && <div style={eTxt}>{errors.volume}</div>}
              <input type="range" min={1000} max={5000000} step={1000} value={volume} onChange={e => setVolume(+e.target.value)} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#9A9AAA", marginTop: 2 }}>
                <span>1K</span><span>5M</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 20 }}>
              <div>
                <label style={lbl}>Defect Rate (%)</label>
                <input type="number" step="0.1" value={defectRate}
                  onChange={e => { setSector("custom"); setDefectRate(+e.target.value || 0); }}
                  style={errors.defectRate ? eInp : inp} />
                {errors.defectRate && <div style={eTxt}>{errors.defectRate}</div>}
              </div>
              <div>
                <label style={lbl}>Cost Per Defect ({sym})</label>
                <input type="number" value={costPerDefect}
                  onChange={e => { setSector("custom"); setCost(+e.target.value || 0); }}
                  style={errors.cost ? eInp : inp} />
                {errors.cost && <div style={eTxt}>{errors.cost}</div>}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div>
                <label style={lbl}>QC Inspectors</label>
                <input type="number" value={inspectors} onChange={e => setInspectors(Math.max(0, +e.target.value || 0))} style={inp} />
              </div>
              <div>
                <label style={lbl}>Avg Salary ({sym}/yr)</label>
                <input type="number" value={salary} onChange={e => setSalary(Math.max(0, +e.target.value || 0))} style={inp} />
              </div>
            </div>
          </div>

          <button onClick={() => setShowAss(!showAss)} style={{
            background: "none", border: "none", color: "#8A8A9A", fontSize: 11,
            cursor: "pointer", padding: 0, letterSpacing: "0.06em", textTransform: "uppercase",
            fontFamily: "inherit", textDecoration: "underline", textUnderlineOffset: 3,
          }}>
            {showAss ? "Hide" : "View"} model assumptions
          </button>

          {showAss && (
            <div style={{ ...card, marginTop: 12, fontSize: 11, color: "#6B6B7A", lineHeight: 2 }}>
              <div><span style={{ color: "#1C1C2E", fontWeight: 500 }}>Defect reduction:</span> {MATTA.defectReductionPct * 100}% <span style={{ color: "#9A9AAA" }}>(automotive QC industry benchmark)</span></div>
              <div><span style={{ color: "#1C1C2E", fontWeight: 500 }}>Detection accuracy:</span> {MATTA.detectionAccuracy}% <span style={{ color: "#9A9AAA" }}>(Matta polymer case study)</span></div>
              <div><span style={{ color: "#1C1C2E", fontWeight: 500 }}>Inspector redeployment:</span> {MATTA.inspectorRedeployPct * 100}% <span style={{ color: "#9A9AAA" }}>(shifted to root-cause analysis)</span></div>
              <div><span style={{ color: "#1C1C2E", fontWeight: 500 }}>Platform cost:</span> {fmtC(MATTA.annualPlatformCost, sym)}/yr <span style={{ color: "#9A9AAA" }}>(hardware + software + integration)</span></div>
              <div style={{ marginTop: 8, paddingTop: 8, borderTop: "1px solid #D8D4CC", color: "#9A9AAA", fontSize: 10 }}>
                Sources: Forrester Computer Vision ROI Study; automotive QC benchmarks; Matta published case studies. Platform cost is illustrative - contact Matta for actual pricing.
              </div>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div>
          {Object.keys(errors).length > 0 && (
            <div style={{ marginBottom: 16, padding: "11px 16px", background: "#FDF5F3", border: "1px solid #E8B4A8", fontSize: 12, color: "#8A3A2A", display: "flex", alignItems: "center", gap: 10 }}>
              <span>⚠</span><span>Some inputs look unusual - results may not be representative.</span>
            </div>
          )}

          {/* Savings hero */}
          <div style={{ background: "linear-gradient(135deg, #FAE8DC 0%, #F5C8B8 50%, #EEDDD4 100%)", padding: 36, marginBottom: 16, position: "relative", overflow: "hidden" }}>
            <div style={{ fontSize: 11, color: "rgba(28,28,46,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500, marginBottom: 12 }}>
              Estimated Annual Savings
            </div>
            <div className="bign" style={{ fontSize: 60, fontWeight: 300, color: "#1C1C2E", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>
              <SavingsHero value={savings} sym={sym} />
            </div>
            <div style={{ fontSize: 13, color: "rgba(28,28,46,0.65)" }}>
              {payback <= 12
                ? `Payback in approx. ${payback} month${payback !== 1 ? "s" : ""}`
                : `Payback in approx. ${(payback / 12).toFixed(1)} years`}
            </div>
            <div style={{ position: "absolute", right: 20, top: 20, opacity: 0.15 }}>
              {[...Array(6)].map((_, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 16 }}>
                  {[...Array(4)].map((_, j) => <div key={j} style={{ fontSize: 10, color: "#1C1C2E", lineHeight: 1 }}>+</div>)}
                </div>
              ))}
            </div>
          </div>

          {/* Bars */}
          <div style={card}>
            <div style={{ fontSize: 11, color: "#6B6B7A", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500, marginBottom: 24 }}>Cost Comparison</div>
            <Bar label="Annual Defect Costs"   before={defectCost}    after={mDefectCost}             sym={sym} />
            <Bar label="QC Labour + Platform"  before={inspCost}      after={mInspCost + mPlatform}   sym={sym} />
            <Bar label="Total Cost of Quality" before={currentTotal}  after={mattaTotal}              sym={sym} />
          </div>

          {/* Metrics */}
          <div className="g2m" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }}>
            {[
              { label: "Defects Prevented",     value: Math.max(0, Math.round(defects - mDefects)).toLocaleString(), sub: "units per year" },
              { label: "Inspectors Redeployed", value: redeployed,                                                    sub: "to higher-value work" },
              { label: "Detection Accuracy",    value: `${MATTA.detectionAccuracy}%`,                                sub: "vs ~80% manual" },
              { label: "3-Year Net Saving",      value: fmtC(Math.max(0, savings * 3 - mPlatform * 3), sym),         sub: "cumulative" },
            ].map((m, i) => (
              <div key={i} style={{ background: "#FAFAF7", border: "1px solid #D8D4CC", padding: 20 }}>
                <div style={{ fontSize: 10, color: "#6B6B7A", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500, marginBottom: 8 }}>{m.label}</div>
                <div style={{ fontSize: 26, fontWeight: 400, color: "#1C1C2E", letterSpacing: "-0.02em", marginBottom: 4 }}>{m.value}</div>
                <div style={{ fontSize: 11, color: "#9A9AAA" }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Sector insight */}
          <div style={{ marginBottom: 16, padding: "14px 18px", background: "#FAFAF7", border: "1px solid #D8D4CC", borderLeft: "3px solid #C97060", fontSize: 12, color: "#4A4A5A", lineHeight: 1.6 }}>
            <div style={{ fontSize: 10, color: "#C97060", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 500, marginBottom: 6 }}>
              {SECTOR_DEFAULTS[sector].label} Insight
            </div>
            {SECTOR_DEFAULTS[sector].benchmark}
          </div>

          {/* CTA */}
          <div className="cta" style={{ background: "#1C1C2E", padding: "24px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" style={{ animation: "spin 4s linear infinite", flexShrink: 0 }}>
                <path fill="#C97060" d="M12 15.5A3.5 3.5 0 0 1 8.5 12 3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5 3.5 3.5 0 0 1-3.5 3.5m7.43-2.92c.04-.34.07-.68.07-1.08 0-.4-.03-.74-.07-1.08l2.3-1.8c.21-.16.27-.46.13-.7l-2.18-3.78c-.14-.24-.42-.32-.66-.24l-2.7 1.08c-.56-.44-1.16-.8-1.82-1.08L14.4 2.42C14.34 2.18 14.12 2 13.88 2h-4.36c-.24 0-.46.18-.5.42l-.41 2.88C8.35 5.58 7.75 5.94 7.19 6.38L4.49 5.3c-.24-.1-.52 0-.66.24L1.65 9.32c-.14.24-.08.54.13.7l2.3 1.8c-.04.34-.07.7-.07 1.08 0 .38.03.74.07 1.08l-2.3 1.8c-.21.16-.27.46-.13.7l2.18 3.78c.14.24.42.32.66.24l2.7-1.08c.56.44 1.16.8 1.82 1.08l.41 2.88c.04.24.26.42.5.42h4.36c.24 0 .46-.18.5-.42l.41-2.88c.66-.28 1.26-.64 1.82-1.08l2.7 1.08c.24.1.52 0 .66-.24l2.18-3.78c.14-.24.08-.54-.13-.7l-2.3-1.8z"/>
              </svg>
              <div style={{ fontSize: 14, color: "rgba(232,228,220,0.8)", fontWeight: 300 }}>Ready to see Matta on your line?</div>
            </div>
            <div className="ctab" style={{ display: "flex", gap: 10, flexShrink: 0, marginLeft: 16 }}>
              <button className="cb" onClick={handleCopy} style={{
                padding: "10px 16px",
                background: copied ? "#4A7A65" : "transparent",
                border: `1px solid ${copied ? "#4A7A65" : "rgba(232,228,220,0.3)"}`,
                color: copied ? "#fff" : "rgba(232,228,220,0.7)",
                fontSize: 12, fontWeight: 500, cursor: "pointer",
                fontFamily: "inherit", transition: "all 0.2s",
              }}>
                {copied ? "✓ Copied" : "Export summary"}
              </button>
              <div className="cb" style={{ padding: "10px 22px", background: "#C97060", color: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer", textAlign: "center" }}>
                Book a deployment call →
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="foot" style={{ borderTop: "1px solid #C4C0B4", padding: "20px 40px", display: "flex", justifyContent: "space-between", alignItems: "center", background: "#E8E4DC" }}>
        <div style={{ fontSize: 11, color: "#9A9AAA", letterSpacing: "0.04em" }}>Made by Kevin D'Souza</div>
        <div style={{ fontSize: 11, color: "#B4B0A8" }}>Estimates based on published industry benchmarks - contact Matta for actual pricing</div>
      </div>
    </div>
  );
}
