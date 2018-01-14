---
layout: page
title: Калькулятор
permalink: /calc/
---

Данный калькулятор считает примерную стоимость замены электропроводки в квартире. Точность калькулятора не позволяет посчитать точно сколько потребуется проложить кабеля, поэтому данные величины усреднены. 
<br/>
<strong>
Реалная стоимость замены проводки может отличастся.
</strong>
<div class="calc advanced">
  <div class="col1">
 	<lable for="room" class="lable_name">Количество комнат*</lable>
	<br>
	<select class="room" required>
	  <option value="0">Не выбрано</option>
	  <option value="1">1 комната</option>
	  <option value="2">2 комнаты</option>
	  <option value="3">3 комнаты</option>
	  <option value="4">4 комнаты</option>
	</select>
	<br>
	<label for="bathroom" class="lable_name">Санузел*</label>
	<br>
	<select class="bathroom" required>
	  <option value="0">Не выбрано</option>
	  <option value="1">Совмещенный</option>
	  <option value="2">Раздельный</option>		
	</select>
	<br>
	<label for="ceiling_height" class="lable_name">Высота потолка*</label>
	<select class="ceiling_height" required>
	  <option value="0">Не выбрано</option>
	  <option value="250">2,5 метра</option>
	  <option value="300">3 метра</option>
	</select>
	<label for="socket" class="lable_name">Количество розеток*</label>
	<br>
	<select class="socket" required>
	  <option value="0">Не выбрано</option>
	  <option value="10">10</option>
	  <option value="11">11</option>
	  <option value="12">12</option>
	  <option value="13">13</option>
	  <option value="14">14</option>
	  <option value="15">15</option>
	  <option value="16">16</option>
	  <option value="17">17</option>
	  <option value="18">18</option>
	  <option value="19">19</option>
	  <option value="20">20</option>
	  <option value="21">21</option>
	  <option value="22">22</option>
	  <option value="23">23</option>
	  <option value="24">24</option>
	  <option value="25">25</option>
	  <option value="26">26</option>
	  <option value="27">27</option>
	  <option value="28">28</option>
	  <option value="29">29</option>
	  <option value="30">30</option>
	  <option value="31">31</option>
	  <option value="32">32</option>
	  <option value="33">33</option>
	  <option value="34">34</option>
	  <option value="35">35</option>
	  <option value="36">36</option>
	  <option value="37">37</option>
	  <option value="38">38</option>
	  <option value="39">39</option>
	  <option value="40">40</option>
	  <option value="41">41</option>
	  <option value="42">42</option>
	  <option value="43">43</option>
	  <option value="44">44</option>
	  <option value="45">45</option>
	  <option value="46">46</option>
	  <option value="47">47</option>
	  <option value="48">48</option>
	  <option value="49">49</option>
	  <option value="50">50</option>
	  <option value="51">51</option>
	  <option value="52">52</option>
	  <option value="53">53</option>
	  <option value="54">54</option>
	  <option value="55">55</option>
	  <option value="56">56</option>
	  <option value="57">57</option>
	  <option value="58">58</option>
	  <option value="59">59</option>
	  <option value="60">60</option>
	</select>
  </div>
<div class="col2">
    <label for="balcony" class="lable_name">Балкон**</label>
    <br>
  	<select class="balcony">
  	  <option value="0">Не выбрано</option>
	  <option value="1">1</option>
	  <option value="2">2</option>		
	</select>
	<br>
	<label for="lumber_room" class="lable_name">Кладовка**</label>
	<br>
	<select class="lumber_room">
	  <option value="0">Не выбрано</option>
	  <option value="1">1</option>
	  <option value="2">2</option>		
	</select>
	<br>
  </div>
<div class="col3">
  <input id="advanced_result" type="button" value="Посчитать">
  <p class="price">
    <span id="final_price_advanced">0</span>
    Руб.
  </p>
</div>
<div class="res calc">
  <table>
	<tr class="tablehead">
      <th>№</th><th>Наим. работ</th><th>кол-во работ</th><th>цена работ</th>
	</tr>
	<tr>
	  <td class="">1</td>
	  <td class="">Коробки</td>
	  <td class="electrical_box">0</td>
	  <td class="electrical_box_price">0</td>
	</tr>
	<tr>
	  <td class="">2</td>
	  <td class="">Монтаж встраиваемого щита</td>
	  <td class="electrical_board">0</td>
	  <td class="electrical_board_price">0</td>
	</tr>
	<tr>
	  <td class="">3</td>
	  <td class="">Коммутация щита</td>
	  <td class="cutout">0</td>
	  <td class="commutation_electrical_board_price">0</td>
	</tr>
	<tr>
	  <td class="">4</td>
	  <td class="">Штробы</td>
	  <td class="electrical_chases_length">0</td>
	  <td class="electrical_chases_price">0</td>
	</tr>
	<tr>
	  <td class="">5</td>
	  <td class="">Монтаж кабеля</td>
	  <td class="wires">0</td>
	  <td class="wires_price">0</td>
	</tr>
	<tr>
	  <td class="">6</td>
	  <td class="">Подрозетники</td>
	  <td class="point">0</td>
	  <td class="point_price">0</td>
	</tr>
	<tr class="tablehead">
	  <td class="">7</td>
	  <td class="tablehead">Итого</td>
	  <td class=""></td>
	  <td class="tablehead" id="final_price_advanced">0</td>
	</tr>
  </table>
</div>
<script type="text/javascript" src="../js/calc.js"></script>
