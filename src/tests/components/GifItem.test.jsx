import { render } from "@testing-library/react";
import { GifItem } from "../../components";

describe('Tests del GifItem component', () => { 
  
  const title = 'One Piece';
  const url = 'https://mugiwara.com.ar/sanji.jpg';


  test('Tiene que hacer MATCH con el Snapshot', () => {
    const {container} = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

});