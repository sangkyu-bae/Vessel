import React from 'react';
import {Ellipse, Map, Polygon} from "react-kakao-maps-sdk";
import {Circle, Polyline, Rectangle} from "@mui/icons-material";

function KaKaoMap(props) {
    return (
        <Map // 지도를 표시할 Container
            center={{
                // 지도의 중심좌표
                lat: 33.450701,
                lng: 126.570667,
            }}
            style={{
                // 지도의 크기
                width: "100%",
                height: "600px",
            }}
            level={3} // 지도의 확대 레벨
        >
            <Circle
                center={{
                    lat: 33.450701,
                    lng: 126.570667,
                }}
                radius={50}
                strokeWeight={5} // 선의 두께입니다
                strokeColor={"#75B8FA"} // 선의 색깔입니다
                strokeOpacity={2} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"dash"} // 선의 스타일 입니다
                fillColor={"#CFE7FF"} // 채우기 색깔입니다
                fillOpacity={0.7} // 채우기 불투명도 입니다
            />
            <Ellipse
                center={{
                    lat: 33.45012,
                    lng: 126.570667,
                }}
                rx={14}
                ry={24}
                strokeWeight={3} // 선의 두께입니다
                strokeColor={"#39DE2A"} // 선의 색깔입니다
                strokeOpacity={0.8} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"solid"} // 선의 스타일입니다
                fillColor={"#A2FF99"} // 채우기 색깔입니다
                fillOpacity={0.7} // 채우기 불투명도 입니다
            />
            <Polyline
                path={[
                    [
                        { lat: 33.452344169439975, lng: 126.56878163224233 },
                        { lat: 33.452739313807456, lng: 126.5709308145358 },
                        { lat: 33.45178067090639, lng: 126.572688693875 },
                    ],
                ]}
                strokeWeight={5} // 선의 두께 입니다
                strokeColor={"#FFAE00"} // 선의 색깔입니다
                strokeOpacity={0.7} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"solid"} // 선의 스타일입니다
            />
            <Polygon
                path={[
                    { lat: 33.45133510810506, lng: 126.57159381623066 },
                    { lat: 33.44955812811862, lng: 126.5713551811832 },
                    { lat: 33.449986291544086, lng: 126.57263296172184 },
                    { lat: 33.450682513554554, lng: 126.57321034054742 },
                    { lat: 33.451346760004206, lng: 126.57235740081413 },
                ]}
                strokeWeight={3} // 선의 두께입니다
                strokeColor={"#39DE2A"} // 선의 색깔입니다
                strokeOpacity={0.8} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"longdash"} // 선의 스타일입니다
                fillColor={"#A2FF99"} // 채우기 색깔입니다
                fillOpacity={0.7} // 채우기 불투명도 입니다
            />
            <Rectangle
                bounds={{
                    sw: {
                        lat: 33.448842,
                        lng: 126.570379,
                    },
                    ne: {
                        lat: 33.450026,
                        lng: 126.568556,
                    },
                }}
                strokeWeight={4} // 선의 두께입니다
                strokeColor={"#FF3DE5"} // 선의 색깔입니다
                strokeOpacity={1} // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
                strokeStyle={"shortdashdot"} // 선의 스타일입니다
                fillColor={"#FF8AEF"} // 채우기 색깔입니다
                fillOpacity={0.8} // 채우기 불투명도 입니다
            />
        </Map>
    );
}

export default KaKaoMap;