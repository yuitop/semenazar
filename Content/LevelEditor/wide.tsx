<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.10" tiledversion="1.10.2" name="wide" tilewidth="16" tileheight="8" tilecount="512" columns="16">
 <image source="wide.png" trans="ff00ff" width="256" height="256"/>
 <tile id="0">
  <properties>
   <property name="object" value="button"/>
   <property name="signal" type="int" value="0"/>
  </properties>
 </tile>
 <tile id="2">
  <properties>
   <property name="max" type="int" value="0"/>
   <property name="min" type="int" value="0"/>
   <property name="mode" value="vertical"/>
   <property name="object" value="signal_platform"/>
   <property name="signal" type="int" value="0"/>
  </properties>
 </tile>
 <tile id="4">
  <properties>
   <property name="direction" type="int" value="2"/>
   <property name="object" value="beam"/>
   <property name="reverse" type="bool" value="false"/>
   <property name="signal" type="int" value="0"/>
  </properties>
 </tile>
 <tile id="5">
  <properties>
   <property name="direction" type="int" value="0"/>
   <property name="object" value="beam"/>
   <property name="reverse" type="bool" value="false"/>
   <property name="signal" type="int" value="0"/>
  </properties>
 </tile>
 <tile id="16">
  <properties>
   <property name="object" value="button"/>
   <property name="signal" type="int" value="1"/>
  </properties>
 </tile>
 <tile id="18">
  <properties>
   <property name="max" type="int" value="0"/>
   <property name="min" type="int" value="0"/>
   <property name="mode" value="vertical"/>
   <property name="object" value="signal_platform"/>
   <property name="signal" type="int" value="1"/>
  </properties>
 </tile>
 <tile id="20">
  <properties>
   <property name="direction" type="int" value="2"/>
   <property name="object" value="beam"/>
   <property name="reverse" type="bool" value="false"/>
   <property name="signal" type="int" value="1"/>
  </properties>
 </tile>
 <tile id="21">
  <properties>
   <property name="direction" type="int" value="0"/>
   <property name="object" value="beam"/>
   <property name="reverse" type="bool" value="false"/>
   <property name="signal" type="int" value="1"/>
  </properties>
 </tile>
 <tile id="32">
  <properties>
   <property name="object" value="button"/>
   <property name="signal" type="int" value="2"/>
  </properties>
 </tile>
 <tile id="34">
  <properties>
   <property name="max" type="int" value="0"/>
   <property name="min" type="int" value="0"/>
   <property name="mode" value="vertical"/>
   <property name="object" value="signal_platform"/>
   <property name="signal" type="int" value="2"/>
  </properties>
 </tile>
 <tile id="36">
  <properties>
   <property name="direction" type="int" value="2"/>
   <property name="object" value="beam"/>
   <property name="reverse" type="bool" value="false"/>
   <property name="signal" type="int" value="2"/>
  </properties>
 </tile>
 <tile id="37">
  <properties>
   <property name="direction" type="int" value="0"/>
   <property name="object" value="beam"/>
   <property name="reverse" type="bool" value="false"/>
   <property name="signal" type="int" value="2"/>
  </properties>
 </tile>
 <tile id="48">
  <properties>
   <property name="object" value="spear"/>
  </properties>
 </tile>
 <tile id="49">
  <properties>
   <property name="object" value="jumppad"/>
  </properties>
 </tile>
 <tile id="64">
  <properties>
   <property name="object" value="falling_platform"/>
  </properties>
 </tile>
 <tile id="80">
  <properties>
   <property name="object" value="weighter"/>
  </properties>
 </tile>
</tileset>
