import Card from './Card';
import { EarningsIcon, ChartIcon, CalendarIcon, CrownIcon } from './SvgIcons';
import '../styles/cards-grid.css';

export default function CardsGrid() {
  return (
    <div className="cards-grid">
      <Card
        icon={<EarningsIcon color="#fdb913" />}
        label="0%"
        amount="$ 0.00"
        title="TODAY'S EARNINGS"
        showChart={true}
        chartType="dots"
        colorType="gold"
      />
      <Card
        icon={<ChartIcon color="#00d4ff" />}
        label="7D"
        amount="$ 0.00"
        title="7-DAY TOTAL"
        showChart={true}
        chartType="line"
        colorType="blue"
      />
      <Card
        icon={<CalendarIcon color="#00ff88" />}
        amount="$ 12.50"
        title=""
        showChart={true}
        chartType="wave"
        colorType="green"
      />
      <Card
        icon={<CrownIcon color="#ff006e" />}
        label="BULL"
        isRoyal={true}
        amount="$ 0.00"
        title=""
        showChart={true}
        chartType="wave-line"
        colorType="pink"
      />
    </div>
  );
}
