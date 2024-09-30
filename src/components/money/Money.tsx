import { MiddleBar } from '../common/middle/MiddleBar';
import { MoneyBody } from './MoneyBody';
import { MoneyTitle } from './MoneyTitle';

export function Money() {
  return (
    <>
      <MoneyTitle />
      <MoneyBody />
      <MiddleBar />
    </>
  );
}
