// Styles
import { LayoutHeroServices } from '../../../components/LayoutHeroServices';
import { LayoutService } from '../../../components/LayoutService';

export default function BackbonesDigital() {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <LayoutHeroServices />
      <LayoutService />
    </div>
  );
}
