
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { a } from '@react-spring/three';

import isLandScene from '../assets/3d/village_personal_assets.glb';


const Island = (props) =>  {

  const islandRef = useRef();

  const { nodes, materials } = useGLTF(isLandScene);

  return (
    <a.group ref={islandRef}  {...props}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["03___Default"]}
        />
        <mesh       
          geometry={nodes.Object_3.geometry}
          material={materials["13___Default"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.Lewis_House_Addon_Textures_02_Mat}
        />
        <mesh 
          geometry={nodes.Object_5.geometry}
          material={materials.Material__14670}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.Material__14975}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.Material__15738}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.Material__16728}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.Material__1896}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.Material__412}
        />
        <mesh 
          geometry={nodes.Object_11.geometry}
          material={materials.Material__424}
        />
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.Tiles}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.UnwrapChecker}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.details}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.extras}
        />
        <mesh
          geometry={nodes.Object_16.geometry}
          material={materials.tiles}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.wall}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.I_stone}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.J_Tile}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.J_Wall}
        />
        <mesh
          geometry={nodes.Object_21.geometry}
          material={materials.J_stone}
        />
        <mesh
          geometry={nodes.Object_22.geometry}
          material={materials.J_wood}
        />
        <mesh
          geometry={nodes.Object_23.geometry}
          material={materials.J_wood}
        />
        <mesh
          geometry={nodes.Object_24.geometry}
          material={materials.J_wood}
        />
        <mesh
          geometry={nodes.Object_25.geometry}
          material={materials.Material__1102}
        />
        <mesh          
          geometry={nodes.Object_26.geometry}
          material={materials.Material__1102}
        />
        <mesh                   
          geometry={nodes.Object_27.geometry}
          material={materials.Material__1193}
        />
        <mesh          
          geometry={nodes.Object_28.geometry}
          material={materials.Material__1215}
        />
        <mesh                    
          geometry={nodes.Object_29.geometry}
          material={materials.Material__16250}
        />
        <mesh                    
          geometry={nodes.Object_30.geometry}
          material={materials.Material__16692}
        />
        <mesh                    
          geometry={nodes.Object_31.geometry}
          material={materials.Material__1897}
        />
        <mesh                    
          geometry={nodes.Object_32.geometry}
          material={materials.Material__19796}
        />
        <mesh                    
          geometry={nodes.Object_33.geometry}
          material={materials.Material__26283}
        />
        <mesh         
          geometry={nodes.Object_34.geometry}
          material={materials.Props}
        />
        <mesh   
          geometry={nodes.Object_35.geometry}
          material={materials.stone}
        />
        <mesh   
          geometry={nodes.Object_36.geometry}
          material={materials.wood}
        />
      </group>
    </a.group>
  );
}

export default Island;