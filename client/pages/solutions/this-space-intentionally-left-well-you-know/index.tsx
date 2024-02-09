import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Monospace } from 'components/copy';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'this-space-intentionally-left-well-you-know';
const ANSWER = `DEVNULL`;

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER} smallTitle={true}>
    <p>
      We are faced with a blank document, and that's intentional as per the
      title. Where is the puzzle? After poking around the sheet, we note that
      there is one line of spaces that seem to be different: some are bolded,
      some italicized, some are black, and some gray. There are also different
      sizes and different fonts. In fact, there are 65 spaces, and each one has
      five characteristics: bold/not, italic/not, size, color, and font.
    </p>
    <p>Each characteristic encodes a separate message within the spaces:</p>
    <ul>
      <li>Boldness: 5-symbol binary using bold space as 1 and non-bold as 0</li>
      <li>
        Italics: Knock code with italic/non-italic space pairs representing
        rows/columns of letters
      </li>
      <li>
        Color: Morse code with 1 black space for dot, three for dash, 1 gray
        space separating symbols and 3 gray spaces separating letters.
      </li>
      <li>Size: Alphanumeric, given in 4-character strings.</li>
      <li>Font: Indexing into the font name by the number of given spaces.</li>
    </ul>
    <p>
      Each encoding minipuzzle gives its own answer, shown below, which can be
      confirmed via a partial answer (with a message "keep going!").
    </p>
    <Table>
      <thead>
        <tr>
          <th>Minipuzzle Mechanic</th>
          <th>Minipuzzle Answer</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Boldface binary</td>
          <td>
            <Monospace>COMRADELINESS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Italics knock code</td>
          <td>
            <Monospace>THIOBACILLUS</Monospace>
          </td>
        </tr>
        <tr>
          <td>Color morse code</td>
          <td>
            <Monospace>TITILLATE</Monospace>
          </td>
        </tr>
        <tr>
          <td>Font size alphanumeric</td>
          <td>
            <Monospace>PSEUDOFEVERISHLY</Monospace>
          </td>
        </tr>
        <tr>
          <td>Font names indexing</td>
          <td>
            <Monospace>TELEINSTRUCTION</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <p>
      After completing the five minipuzzles, we realize that there must be a
      meta uniting the five answers. Examining the strange answer words, we note
      that they begin and end with the same letters as the five fonts used in
      the font minipuzzle. Moreover, they are also the same length if we include
      the spaces. All of the fonts' full names have multiple words, and so have
      1 or 2 spaces in them. After matching the minipuzzle answers to the
      corresponding font name, in alphabetical order, the "mask" reveals the
      answer in the spaces:{' '}
      <b>
        <Monospace>DEVNULL</Monospace>
      </b>
      <b>.</b>
    </p>
    <Table id="extraction">
      <thead>
        <tr>
          <th>Font Name</th>
          <th>Minipuzzle Answer</th>
          <th>Extracted Letter(s)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Monospace>COMIC SANS MS</Monospace>
          </td>
          <td>
            <Monospace>COMRA</Monospace>
            <b>
              <Monospace>D</Monospace>
            </b>
            <Monospace>ELIN</Monospace>
            <b>
              <Monospace>E</Monospace>
            </b>
            <Monospace>SS</Monospace>
          </td>
          <td>
            <Monospace>DE</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>PLAYFAIR DISPLAY</Monospace>
          </td>
          <td>
            <Monospace>PSEUDOFE</Monospace>
            <b>
              <Monospace>V</Monospace>
            </b>
            <Monospace>ERISHLY</Monospace>
          </td>
          <td>
            <Monospace>V</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TIMES NEW ROMAN</Monospace>
          </td>
          <td>
            <Monospace>TELEI</Monospace>
            <b>
              <Monospace>N</Monospace>
            </b>
            <Monospace>STR</Monospace>
            <b>
              <Monospace>U</Monospace>
            </b>
            <Monospace>CTION</Monospace>
          </td>
          <td>
            <Monospace>NU</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TITAN ONE</Monospace>
          </td>
          <td>
            <Monospace>TITIL</Monospace>
            <b>
              <Monospace>L</Monospace>
            </b>
            <Monospace>ATE</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
        <tr>
          <td>
            <Monospace>TREBUCHET MS</Monospace>
          </td>
          <td>
            <Monospace>THIOBACIL</Monospace>
            <b>
              <Monospace>L</Monospace>
            </b>
            <Monospace>US</Monospace>
          </td>
          <td>
            <Monospace>L</Monospace>
          </td>
        </tr>
      </tbody>
    </Table>
    <Appendix>
      <h3 className="mb-2">Spaces Data</h3>
      <Table id="appendix-1">
        <thead>
          <tr>
            <th>Space #</th>
            <th>A: Bold/Not</th>
            <th>B: Italic/Not</th>
            <th>C: Color (black/gray)</th>
            <th>D: Size</th>
            <th>E: Font</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>16</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>2</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>16</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>3</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>16</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>4</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>16</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>5</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>19</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>6</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>19</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>7</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>19</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>8</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>19</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>9</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td>5</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>10</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>5</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>11</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>5</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>12</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>5</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>13</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>21</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>14</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>21</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>15</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td>21</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>16</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>21</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>17</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>4</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>18</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>4</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>19</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>4</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>20</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>4</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>21</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>15</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>22</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>15</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>23</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>15</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>24</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>15</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>25</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>6</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>26</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>6</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>27</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>6</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>28</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>6</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>29</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
            <td>Times New Roman</td>
          </tr>
          <tr>
            <td>30</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>5</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>31</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>32</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>5</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>33</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>22</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>34</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>22</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>35</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>22</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>36</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>22</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>37</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td>5</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>38</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>5</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>39</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>40</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>41</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>18</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>42</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>18</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>43</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>18</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>44</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>18</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>45</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>9</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>46</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>9</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>47</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>9</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>48</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>9</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>49</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>19</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>50</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>19</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>51</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>19</td>
            <td>Trebuchet MS</td>
          </tr>
          <tr>
            <td>52</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>19</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>53</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td>8</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>54</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>8</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>55</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>8</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>56</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>8</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>57</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>12</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>58</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>12</td>
            <td>Playfair Display</td>
          </tr>
          <tr>
            <td>59</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td>12</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>60</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>12</td>
            <td>Comic Sans MS</td>
          </tr>
          <tr>
            <td>61</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>25</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>62</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>25</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>63</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>25</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>64</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>25</td>
            <td>Titan One</td>
          </tr>
          <tr>
            <td>65</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>25</td>
            <td>Titan One</td>
          </tr>
        </tbody>
      </Table>
      <h3 className="mt-4 mb-2">Binary, Tap Code, Morse, Size</h3>
      <Table id="appendix-2">
        <thead>
          <tr>
            <th>#</th>
            <th>Bold?</th>
            <th>Binary</th>
            <th></th>
            <th>Italic?</th>
            <th>Tap Code</th>
            <th></th>
            <th>Color</th>
            <th>Morse</th>
            <th></th>
            <th>Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>not</td>
            <td rowSpan={5}>00011</td>
            <td rowSpan={5}>
              <Monospace>C</Monospace>
            </td>
            <td>Italic</td>
            <td rowSpan={8}>4, 4</td>
            <td rowSpan={8}>
              <Monospace>T</Monospace>
            </td>
            <td>black</td>
            <td rowSpan={6}>
              <Monospace>-</Monospace>
            </td>
            <td rowSpan={6}>
              <Monospace>T</Monospace>
            </td>
            <td>16</td>
            <td rowSpan={4}>
              <Monospace>P</Monospace>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>16</td>
          </tr>
          <tr>
            <td>3</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>16</td>
          </tr>
          <tr>
            <td>4</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>16</td>
          </tr>
          <tr>
            <td>5</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>19</td>
            <td rowSpan={4}>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>not</td>
            <td rowSpan={5}>01111</td>
            <td rowSpan={5}>
              <Monospace>O</Monospace>
            </td>
            <td>not</td>
            <td>gray</td>
            <td>19</td>
          </tr>
          <tr>
            <td>7</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td rowSpan={6}>
              <Monospace>..</Monospace>
            </td>
            <td rowSpan={6}>
              <Monospace>I</Monospace>
            </td>
            <td>19</td>
          </tr>
          <tr>
            <td>8</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>19</td>
          </tr>
          <tr>
            <td>9</td>
            <td>bold</td>
            <td>Italic</td>
            <td rowSpan={5}>2, 3</td>
            <td rowSpan={5}>
              <Monospace>H</Monospace>
            </td>
            <td>black</td>
            <td>5</td>
            <td rowSpan={4}>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>5</td>
          </tr>
          <tr>
            <td>11</td>
            <td>not</td>
            <td rowSpan={5}>01101</td>
            <td rowSpan={5}>
              <Monospace>M</Monospace>
            </td>
            <td>not</td>
            <td>gray</td>
            <td>5</td>
          </tr>
          <tr>
            <td>12</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>5</td>
          </tr>
          <tr>
            <td>13</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td rowSpan={6}>
              <Monospace>-</Monospace>
            </td>
            <td rowSpan={6}>
              <Monospace>T</Monospace>
            </td>
            <td>21</td>
            <td rowSpan={4}>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>14</td>
            <td>not</td>
            <td>Italic</td>
            <td rowSpan={6}>2, 4</td>
            <td rowSpan={6}>
              <Monospace>I</Monospace>
            </td>
            <td>black</td>
            <td>21</td>
          </tr>
          <tr>
            <td>15</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td>21</td>
          </tr>
          <tr>
            <td>16</td>
            <td>bold</td>
            <td rowSpan={5}>10010</td>
            <td rowSpan={5}>
              <Monospace>R</Monospace>
            </td>
            <td>not</td>
            <td>gray</td>
            <td>21</td>
          </tr>
          <tr>
            <td>17</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>4</td>
            <td rowSpan={4}>
              <Monospace>D</Monospace>
            </td>
          </tr>
          <tr>
            <td>18</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>4</td>
          </tr>
          <tr>
            <td>19</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td rowSpan={6}>
              <Monospace>..</Monospace>
            </td>
            <td rowSpan={6}>
              <Monospace>I</Monospace>
            </td>
            <td>4</td>
          </tr>
          <tr>
            <td>20</td>
            <td>not</td>
            <td>Italic</td>
            <td rowSpan={7}>3, 4</td>
            <td rowSpan={7}>
              <Monospace>O</Monospace>
            </td>
            <td>gray</td>
            <td>4</td>
          </tr>
          <tr>
            <td>21</td>
            <td>not</td>
            <td rowSpan={5}>00001</td>
            <td rowSpan={5}>
              <Monospace>A</Monospace>
            </td>
            <td>Italic</td>
            <td>black</td>
            <td>15</td>
            <td rowSpan={4}>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>22</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>15</td>
          </tr>
          <tr>
            <td>23</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>15</td>
          </tr>
          <tr>
            <td>24</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>15</td>
          </tr>
          <tr>
            <td>25</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td rowSpan={12}>
              <Monospace>.-..</Monospace>
            </td>
            <td rowSpan={12}>
              <Monospace>L</Monospace>
            </td>
            <td>6</td>
            <td rowSpan={4}>
              <Monospace>F</Monospace>
            </td>
          </tr>
          <tr>
            <td>26</td>
            <td>not</td>
            <td rowSpan={5}>00100</td>
            <td rowSpan={5}>
              <Monospace>D</Monospace>
            </td>
            <td>not</td>
            <td>gray</td>
            <td>6</td>
          </tr>
          <tr>
            <td>27</td>
            <td>not</td>
            <td>Italic</td>
            <td rowSpan={3}>1, 2</td>
            <td rowSpan={3}>
              <Monospace>B</Monospace>
            </td>
            <td>black</td>
            <td>6</td>
          </tr>
          <tr>
            <td>28</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>6</td>
          </tr>
          <tr>
            <td>29</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
            <td rowSpan={4}>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>30</td>
            <td>not</td>
            <td>Italic</td>
            <td rowSpan={2}>1, 1</td>
            <td rowSpan={2}>
              <Monospace>A</Monospace>
            </td>
            <td>gray</td>
            <td>5</td>
          </tr>
          <tr>
            <td>31</td>
            <td>not</td>
            <td rowSpan={5}>00101</td>
            <td rowSpan={5}>
              <Monospace>E</Monospace>
            </td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
          </tr>
          <tr>
            <td>32</td>
            <td>not</td>
            <td>Italic</td>
            <td rowSpan={4}>1, 3</td>
            <td rowSpan={4}>
              <Monospace>C</Monospace>
            </td>
            <td>gray</td>
            <td>5</td>
          </tr>
          <tr>
            <td>33</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>22</td>
            <td rowSpan={4}>
              <Monospace>V</Monospace>
            </td>
          </tr>
          <tr>
            <td>34</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>22</td>
          </tr>
          <tr>
            <td>35</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>22</td>
          </tr>
          <tr>
            <td>36</td>
            <td>not</td>
            <td rowSpan={5}>01100</td>
            <td rowSpan={5}>
              <Monospace>L</Monospace>
            </td>
            <td>Italic</td>
            <td rowSpan={6}>2, 4</td>
            <td rowSpan={6}>
              <Monospace>I</Monospace>
            </td>
            <td>gray</td>
            <td>22</td>
          </tr>
          <tr>
            <td>37</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td rowSpan={12}>
              <Monospace>.-..</Monospace>
            </td>
            <td rowSpan={12}>
              <Monospace>L</Monospace>
            </td>
            <td>5</td>
            <td rowSpan={4}>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>38</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>5</td>
          </tr>
          <tr>
            <td>39</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
          </tr>
          <tr>
            <td>40</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>5</td>
          </tr>
          <tr>
            <td>41</td>
            <td>not</td>
            <td rowSpan={5}>01001</td>
            <td rowSpan={5}>
              <Monospace>I</Monospace>
            </td>
            <td>not</td>
            <td>black</td>
            <td>18</td>
            <td rowSpan={4}>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>42</td>
            <td>bold</td>
            <td>Italic</td>
            <td rowSpan={4}>3, 1</td>
            <td rowSpan={4}>
              <Monospace>L</Monospace>
            </td>
            <td>gray</td>
            <td>18</td>
          </tr>
          <tr>
            <td>43</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>18</td>
          </tr>
          <tr>
            <td>44</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>18</td>
          </tr>
          <tr>
            <td>45</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td>9</td>
            <td rowSpan={4}>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>46</td>
            <td>not</td>
            <td rowSpan={5}>01110</td>
            <td rowSpan={5}>
              <Monospace>N</Monospace>
            </td>
            <td>Italic</td>
            <td rowSpan={4}>3, 1</td>
            <td rowSpan={4}>
              <Monospace>L</Monospace>
            </td>
            <td>gray</td>
            <td>9</td>
          </tr>
          <tr>
            <td>47</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>9</td>
          </tr>
          <tr>
            <td>48</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>9</td>
          </tr>
          <tr>
            <td>49</td>
            <td>bold</td>
            <td>not</td>
            <td>black</td>
            <td rowSpan={8}>
              <Monospace>.-</Monospace>
            </td>
            <td rowSpan={8}>
              <Monospace>A</Monospace>
            </td>
            <td>19</td>
            <td rowSpan={4}>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>50</td>
            <td>not</td>
            <td>Italic</td>
            <td rowSpan={9}>4, 5</td>
            <td rowSpan={9}>
              <Monospace>U</Monospace>
            </td>
            <td>gray</td>
            <td>19</td>
          </tr>
          <tr>
            <td>51</td>
            <td>not</td>
            <td rowSpan={5}>00101</td>
            <td rowSpan={5}>
              <Monospace>E</Monospace>
            </td>
            <td>Italic</td>
            <td>black</td>
            <td>19</td>
          </tr>
          <tr>
            <td>52</td>
            <td>not</td>
            <td>Italic</td>
            <td>black</td>
            <td>19</td>
          </tr>
          <tr>
            <td>53</td>
            <td>bold</td>
            <td>Italic</td>
            <td>black</td>
            <td>8</td>
            <td rowSpan={4}>
              <Monospace>H</Monospace>
            </td>
          </tr>
          <tr>
            <td>54</td>
            <td>not</td>
            <td>not</td>
            <td>gray</td>
            <td>8</td>
          </tr>
          <tr>
            <td>55</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>8</td>
          </tr>
          <tr>
            <td>56</td>
            <td>bold</td>
            <td rowSpan={5}>10011</td>
            <td rowSpan={5}>
              <Monospace>S</Monospace>
            </td>
            <td>not</td>
            <td>gray</td>
            <td>8</td>
          </tr>
          <tr>
            <td>57</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td rowSpan={6}>
              <Monospace>-</Monospace>
            </td>
            <td rowSpan={6}>
              <Monospace>T</Monospace>
            </td>
            <td>12</td>
            <td rowSpan={4}>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>58</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td>12</td>
          </tr>
          <tr>
            <td>59</td>
            <td>bold</td>
            <td>Italic</td>
            <td rowSpan={7}>4, 3</td>
            <td rowSpan={7}>
              <Monospace>S</Monospace>
            </td>
            <td>black</td>
            <td>12</td>
          </tr>
          <tr>
            <td>60</td>
            <td>bold</td>
            <td>Italic</td>
            <td>gray</td>
            <td>12</td>
          </tr>
          <tr>
            <td>61</td>
            <td>bold</td>
            <td rowSpan={5}>10011</td>
            <td rowSpan={5}>
              <Monospace>S</Monospace>
            </td>
            <td>Italic</td>
            <td>gray</td>
            <td>25</td>
            <td rowSpan={5}>
              <Monospace>Y</Monospace>
            </td>
          </tr>
          <tr>
            <td>62</td>
            <td>not</td>
            <td>Italic</td>
            <td>gray</td>
            <td>25</td>
          </tr>
          <tr>
            <td>63</td>
            <td>not</td>
            <td>not</td>
            <td>black</td>
            <td rowSpan={3}>
              <Monospace>.</Monospace>
            </td>
            <td rowSpan={3}>
              <Monospace>E</Monospace>
            </td>
            <td>25</td>
          </tr>
          <tr>
            <td>64</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>25</td>
          </tr>
          <tr>
            <td>65</td>
            <td>bold</td>
            <td>not</td>
            <td>gray</td>
            <td>25</td>
          </tr>
        </tbody>
      </Table>
      <h3 className="mt-4 mb-2">Font Names</h3>
      <Table id="appendix-3">
        <thead>
          <tr>
            <th>Font</th>
            <th># Consecutive</th>
            <th>Extract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Monospace>TIMES NEW ROMAN</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TREBUCHET MS</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>PLAYFAIR DISPLAY</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>L</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TIMES NEW ROMAN</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>E</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>COMIC SANS MS</Monospace>
            </td>
            <td>4</td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TITAN ONE</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TIMES NEW ROMAN</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>S</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TITAN ONE</Monospace>
            </td>
            <td>3</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>PLAYFAIR DISPLAY</Monospace>
            </td>
            <td>8</td>
            <td>
              <Monospace>R</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TREBUCHET MS</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>U</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>COMIC SANS MS</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>C</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TREBUCHET MS</Monospace>
            </td>
            <td>1</td>
            <td>
              <Monospace>T</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>PLAYFAIR DISPLAY</Monospace>
            </td>
            <td>7</td>
            <td>
              <Monospace>I</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>COMIC SANS MS</Monospace>
            </td>
            <td>2</td>
            <td>
              <Monospace>O</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>TITAN ONE</Monospace>
            </td>
            <td>5</td>
            <td>
              <Monospace>N</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
    </Appendix>
    <style jsx global>{`
      #extraction td:nth-child(3),
      #appendix-1 td:nth-child(5),
      #appendix-1 td:nth-child(1),
      #appendix-1 td:nth-child(2),
      #appendix-1 td:nth-child(3),
      #appendix-1 td:nth-child(4),
      #appendix-1 td:nth-child(5),
      #appendix-2 td,
      #appendix-3 td:nth-child(2),
      #appendix-3 td:nth-child(3) {
        text-align: center;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
