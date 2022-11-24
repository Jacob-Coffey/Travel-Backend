

5ae2e3f221c38a28845f05b6170f37a6f71174fbabf14a393fcc6ec1


export interface Places {
    kinds:     string;
    sources:   Sources;
    bbox:      Bbox;
    point:     Point;
    osm:       string;
    otm:       string;
    xid:       string;
    name:      string;
    wikipedia: string;
    image:     string;
    wikidata:  string;
    rate:      string;
    info:      Info;
}

export interface Bbox {
    lat_max: number;
    lat_min: number;
    lon_max: number;
    lon_min: number;
}

export interface Info {
    descr:      string;
    image:      string;
    img_width:  number;
    src:        string;
    src_id:     number;
    img_height: number;
}

export interface Point {
    lon: number;
    lat: number;
}

export interface Sources {
    geometry:   string;
    attributes: string[];
}
