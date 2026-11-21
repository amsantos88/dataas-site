// Diagrama do processo de ponta a ponta: fontes → engenharia → warehouse → BI.
// É o elemento visual principal do site: mostra o "do início ao fim" em vez de só dizer.

const fontes = ["ERP", "CRM", "Planilhas", "APIs"];

export default function Pipeline() {
  return (
    <svg
      viewBox="0 0 520 300"
      role="img"
      aria-label="Fluxo de dados: ERP, CRM, planilhas e APIs passam pela engenharia de dados, chegam ao data warehouse e viram dashboards de BI"
      className="w-full h-auto"
    >
      {/* Fontes */}
      {fontes.map((f, i) => {
        const y = 30 + i * 70;
        return (
          <g key={f}>
            <rect x="0" y={y} width="92" height="40" rx="6" fill="#1c3150" stroke="#2c4568" />
            <text x="46" y={y + 25} textAnchor="middle" fill="#c9d5e2" fontSize="13">
              {f}
            </text>
            <path
              d={`M92 ${y + 20} C 130 ${y + 20}, 130 150, 168 150`}
              fill="none"
              stroke="#2c4568"
              strokeWidth="2"
            />
            <path
              className="pipe-flow"
              d={`M92 ${y + 20} C 130 ${y + 20}, 130 150, 168 150`}
              fill="none"
              stroke="#5fa3c0"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </g>
        );
      })}

      {/* Engenharia */}
      <rect x="168" y="118" width="104" height="64" rx="8" fill="#1c3150" stroke="#5fa3c0" />
      <text x="220" y="146" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="600">
        Engenharia
      </text>
      <text x="220" y="164" textAnchor="middle" fill="#8fa6be" fontSize="11">
        pipelines
      </text>

      <line x1="272" y1="150" x2="312" y2="150" stroke="#2c4568" strokeWidth="2" />
      <line className="pipe-flow" x1="272" y1="150" x2="312" y2="150" stroke="#5fa3c0" strokeWidth="2.5" />

      {/* Warehouse: cilindro */}
      <g>
        <path d="M312 122 v56 a40 10 0 0 0 80 0 v-56" fill="#1c3150" stroke="#5fa3c0" />
        <ellipse cx="352" cy="122" rx="40" ry="10" fill="#22395c" stroke="#5fa3c0" />
        <text x="352" y="156" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="600">
          Warehouse
        </text>
      </g>

      <line x1="392" y1="150" x2="420" y2="150" stroke="#2c4568" strokeWidth="2" />
      <line className="pipe-flow" x1="392" y1="150" x2="420" y2="150" stroke="#e8a33d" strokeWidth="2.5" />

      {/* BI: mini dashboard */}
      <g>
        <rect x="420" y="96" width="100" height="108" rx="8" fill="#e8a33d" />
        <rect x="432" y="108" width="40" height="8" rx="2" fill="#13233a" opacity="0.8" />
        <rect x="432" y="168" width="10" height="24" rx="1" fill="#13233a" />
        <rect x="448" y="156" width="10" height="36" rx="1" fill="#13233a" />
        <rect x="464" y="146" width="10" height="46" rx="1" fill="#13233a" />
        <rect x="480" y="132" width="10" height="60" rx="1" fill="#13233a" />
        <polyline
          points="432,140 448,134 464,128 480,118 504,112"
          fill="none"
          stroke="#13233a"
          strokeWidth="2"
        />
        <text x="470" y="226" textAnchor="middle" fill="#e8a33d" fontSize="13" fontWeight="600">
          BI
        </text>
      </g>
    </svg>
  );
}
