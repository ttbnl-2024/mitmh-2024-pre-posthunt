import { FC } from 'react';

import Appendix from 'components/appendix';
import AuthorsNotes from 'components/authors_notes';
import { Colors } from 'components/crossword';
import Grid, { _ } from 'components/grid';
import { PuzzleDataProps, getPuzzleProps } from 'components/puzzle';
import SheetableImage from 'components/sheetable_image';
import Solution, { Answerize, Clue } from 'components/solution';
import Table from 'components/table';

const SLUG = 'split-the-difference';
const ANSWER = `CLAUDE BERRI`;

const gridData = [
  'RUBATO_REMEDY_SYSOP',
  'E_U_A__E_E_A__W_T_O',
  'CATACOMB_R_MOLEHILL',
  'E_T_T__U_I_O__E_F_E',
  'NOEXIT_FUTON_SPIFFS',
  'T_R_C__F________E__',
  '________CLAM__PINUP',
  'LAWSUITS_E_AJAR___E',
  'U_O_N__INNED__E_O_A',
  'RURAL__L_V_R__FEMUR',
  'K_M_E__ELEVE__E_I_L',
  'E___SWAN_R_SECRETLY',
  'REGIS__TUSK________',
  '__E________E__M_V_P',
  'PURSUE_GALAS_CAVITY',
  'A_M_M__U_I_C__S_S_T',
  'DEADPOOL_G_HUSHHUSH',
  'R_N_T__L_H_E__I_A_O',
  'ENEMY_OYSTER_VERLAN',
].map((row) => row.split('').map((cell) => (cell === '_' ? _ : cell)));

const gridShade = gridData.map((row) =>
  row.map((cell) => (cell === _ ? Colors.C7 : ''))
);

const PuzzleSolution: FC<PuzzleDataProps> = ({ puzzleData }) => (
  <Solution puzzleData={puzzleData} answer={ANSWER}>
    <p>
      Solving the split ends crossword yields the following grid, with clue
      matchings given in the appendix.
    </p>
    <Grid data={gridData} shading={gridShade} className="crossword-grid" />
    <p>
      In the lower right, we answered the clue "French argot that has no English
      equivalent (or does it?)" with <Clue>VERLAN</Clue>. In the center, we
      answered the clue "French term meaning the reverse" with the reversal of{' '}
      <Clue>VERLAN</Clue>'s syllables, <Clue>L'ENVERS</Clue>. Verlan is French
      argot ("slang") for words that have two syllables swapped, and we can
      perform this transformation on several English words in the grid:
    </p>
    <p>
      While these verlaned words themselves don't fit in the grid, we can
      construct clues for them from the given clues in the puzzle. We reuse the
      second half as the new first half, and borrow the new second half from
      elsewhere. For example, the clue for <Clue>LURKER</Clue> is (74 + 10),
      "One who watches but is not a / participant." The clue for the verlaned{' '}
      <Clue>CURLER</Clue> is (10 + 75), "Participant / using a broom in sports."
      The reused halves are numbered 10, 20, … 110, which provides an ordering.
    </p>
    <Table className="clues-table">
      <thead>
        <tr>
          <th>Grid</th>
          <th>Verlaned</th>
          <th>First #</th>
          <th>First clue</th>
          <th>Second #</th>
          <th>Second clue</th>
          <th>Third #</th>
          <th>Third clue</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>LURKER</td>
          <td>CURLER</td>
          <td>74</td>
          <td>One who watches but is not a</td>
          <td>10</td>
          <td>Participant</td>
          <td>75</td>
          <td>Using a broom in sports</td>
        </tr>
        <tr>
          <td>GULLY</td>
          <td>EAGLE</td>
          <td>54</td>
          <td>Erosion's</td>
          <td>20</td>
          <td>Possible result</td>
          <td>58</td>
          <td>After a long drive</td>
        </tr>
        <tr>
          <td>GERMANE</td>
          <td>MANGER</td>
          <td>13</td>
          <td>Relevant to a</td>
          <td>30</td>
          <td>Topic</td>
          <td>15</td>
          <td>In a popular Christmas carol about the birth of Jesus</td>
        </tr>
        <tr>
          <td>PURSUE</td>
          <td>SUPER</td>
          <td>89</td>
          <td>Seek or carry</td>
          <td>40</td>
          <td>Out</td>
          <td>91</td>
          <td>Of sight</td>
        </tr>
        <tr>
          <td>DAMON</td>
          <td>MONDAY</td>
          <td>95</td>
          <td>Arnette of the</td>
          <td>50</td>
          <td>NFL</td>
          <td>99</td>
          <td>Night</td>
        </tr>
        <tr>
          <td>UNLESS</td>
          <td>LESSON</td>
          <td>16</td>
          <td>Except</td>
          <td>60</td>
          <td>When</td>
          <td>18</td>
          <td>Those with class may attend</td>
        </tr>
        <tr>
          <td>BUTTER</td>
          <td>TURBOT</td>
          <td>43</td>
          <td>Fatty</td>
          <td>70</td>
          <td>Food</td>
          <td>47</td>
          <td>Fish</td>
        </tr>
        <tr>
          <td>PEARLY</td>
          <td>LEAPER</td>
          <td>63</td>
          <td>Style of gates that may be fit for a</td>
          <td>80</td>
          <td>Lord</td>
          <td>65</td>
          <td>On the 10th day</td>
        </tr>
        <tr>
          <td>RECENT</td>
          <td>SENTRY</td>
          <td>36</td>
          <td>Compared to 1492, the</td>
          <td>90</td>
          <td>Year 2000</td>
          <td>41</td>
          <td>Marvel superhero Reynolds</td>
        </tr>
        <tr>
          <td>FEMUR</td>
          <td>MURPHY</td>
          <td>83</td>
          <td>Largest bone in the</td>
          <td>100</td>
          <td>Legs</td>
          <td>86</td>
          <td>Fold in one of these beds</td>
        </tr>
        <tr>
          <td>TACTIC</td>
          <td>TICTAC</td>
          <td>21</td>
          <td>Strategic</td>
          <td>110</td>
          <td>Element used in fighting</td>
          <td>23</td>
          <td>Halitosis</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The difference between the old first half and the new second half is a
      small number, which we can use as an index into the verlaned word:
    </p>
    <Table className="verlan-table">
      <thead>
        <tr>
          <th>Difference</th>
          <th>Verlaned</th>
          <th>Index</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>CURLER</td>
          <td>C</td>
        </tr>
        <tr>
          <td>4</td>
          <td>EAGLE</td>
          <td>L</td>
        </tr>
        <tr>
          <td>2</td>
          <td>MANGER</td>
          <td>A</td>
        </tr>
        <tr>
          <td>2</td>
          <td>SUPER</td>
          <td>U</td>
        </tr>
        <tr>
          <td>4</td>
          <td>MONDAY</td>
          <td>D</td>
        </tr>
        <tr>
          <td>2</td>
          <td>LESSON</td>
          <td>E</td>
        </tr>
        <tr>
          <td>4</td>
          <td>TURBOT</td>
          <td>B</td>
        </tr>
        <tr>
          <td>2</td>
          <td>LEAPER</td>
          <td>E</td>
        </tr>
        <tr>
          <td>5</td>
          <td>SENTRY</td>
          <td>R</td>
        </tr>
        <tr>
          <td>3</td>
          <td>MURPHY</td>
          <td>R</td>
        </tr>
        <tr>
          <td>2</td>
          <td>TICTAC</td>
          <td>I</td>
        </tr>
      </tbody>
    </Table>
    <p>
      The answer is <Answerize>{ANSWER}</Answerize>.
    </p>
    <Appendix>
      <Table className="appendix-table">
        <thead>
          <tr>
            <th>Clue</th>
            <th>Word</th>
            <th>First #</th>
            <th>First Clue</th>
            <th>Second #</th>
            <th>Second Clue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>126</td>
            <td>RUBATO</td>
            <td>102</td>
            <td>Tempo</td>
            <td>24</td>
            <td>Fluctuation</td>
          </tr>
          <tr>
            <td>80</td>
            <td>REMEDY</td>
            <td>46</td>
            <td>Medical</td>
            <td>34</td>
            <td>Solution</td>
          </tr>
          <tr>
            <td>153</td>
            <td>SYSOP</td>
            <td>49</td>
            <td>Computer server</td>
            <td>104</td>
            <td>Administrator</td>
          </tr>
          <tr>
            <td>50</td>
            <td>CATACOMB</td>
            <td>42</td>
            <td>Underground</td>
            <td>8</td>
            <td>Cemetery</td>
          </tr>
          <tr>
            <td>19</td>
            <td>MOLEHILL</td>
            <td>14</td>
            <td>A mound</td>
            <td>5</td>
            <td>Worriers might make much bigger</td>
          </tr>
          <tr>
            <td>65</td>
            <td>NOEXIT</td>
            <td>26</td>
            <td>2022 thriller</td>
            <td>39</td>
            <td>Set during a blizzard</td>
          </tr>
          <tr>
            <td>184</td>
            <td>FUTON</td>
            <td>86</td>
            <td>Fold in one of these beds</td>
            <td>98</td>
            <td>So you can sit on it</td>
          </tr>
          <tr>
            <td>105</td>
            <td>SPIFFS</td>
            <td>68</td>
            <td>Sales</td>
            <td>37</td>
            <td>Bonuses</td>
          </tr>
          <tr>
            <td>14</td>
            <td>CLAM</td>
            <td>11</td>
            <td>Steamer or</td>
            <td>3</td>
            <td>Buck</td>
          </tr>
          <tr>
            <td>48</td>
            <td>PINUP</td>
            <td>44</td>
            <td>Celebrity</td>
            <td>4</td>
            <td>Poster</td>
          </tr>
          <tr>
            <td>84</td>
            <td>LAWSUITS</td>
            <td>77</td>
            <td>These are tried</td>
            <td>7</td>
            <td>Before a court</td>
          </tr>
          <tr>
            <td>107</td>
            <td>AJAR</td>
            <td>6</td>
            <td>Cracked</td>
            <td>101</td>
            <td>Slightly</td>
          </tr>
          <tr>
            <td>144</td>
            <td>INNED</td>
            <td>57</td>
            <td>Put up</td>
            <td>87</td>
            <td>At a hotel</td>
          </tr>
          <tr>
            <td>121</td>
            <td>RURAL</td>
            <td>62</td>
            <td>Not heavily</td>
            <td>59</td>
            <td>Populated</td>
          </tr>
          <tr>
            <td>183</td>
            <td>FEMUR</td>
            <td>83</td>
            <td>Largest bone in the</td>
            <td>100</td>
            <td>Legs</td>
          </tr>
          <tr>
            <td>203</td>
            <td>ELEVE</td>
            <td>109</td>
            <td>Student</td>
            <td>94</td>
            <td>Of a professeur</td>
          </tr>
          <tr>
            <td>140</td>
            <td>SWAN</td>
            <td>76</td>
            <td>Type of song</td>
            <td>64</td>
            <td>Or dive</td>
          </tr>
          <tr>
            <td>196</td>
            <td>SECRETLY</td>
            <td>93</td>
            <td>Behind</td>
            <td>103</td>
            <td>Closed doors</td>
          </tr>
          <tr>
            <td>109</td>
            <td>REGIS</td>
            <td>81</td>
            <td>TV Host</td>
            <td>28</td>
            <td>Philbin, who died at an old age</td>
          </tr>
          <tr>
            <td>57</td>
            <td>TUSK</td>
            <td>12</td>
            <td>Fleetwood</td>
            <td>45</td>
            <td>Mac album and song</td>
          </tr>
          <tr>
            <td>129</td>
            <td>PURSUE</td>
            <td>89</td>
            <td>Seek or carry</td>
            <td>40</td>
            <td>Out</td>
          </tr>
          <tr>
            <td>74</td>
            <td>GALAS</td>
            <td>18</td>
            <td>Those with class may attend</td>
            <td>56</td>
            <td>These functions</td>
          </tr>
          <tr>
            <td>32</td>
            <td>CAVITY</td>
            <td>23</td>
            <td>Halitosis</td>
            <td>9</td>
            <td>May be caused by one</td>
          </tr>
          <tr>
            <td>102</td>
            <td>DEADPOOL</td>
            <td>41</td>
            <td>Marvel superhero Reynolds</td>
            <td>61</td>
            <td>Played to success after a failure in DC</td>
          </tr>
          <tr>
            <td>202</td>
            <td>HUSHHUSH</td>
            <td>105</td>
            <td>Under</td>
            <td>97</td>
            <td>Wraps</td>
          </tr>
          <tr>
            <td>72</td>
            <td>ENEMY</td>
            <td>53</td>
            <td>Title word in an update to</td>
            <td>19</td>
            <td><i>The Conversation</i></td>
          </tr>
          <tr>
            <td>146</td>
            <td>OYSTER</td>
            <td>67</td>
            <td>Source of</td>
            <td>79</td>
            <td>Pearls</td>
          </tr>
          <tr>
            <td>52</td>
            <td>VERLAN</td>
            <td>1</td>
            <td>French</td>
            <td>51</td>
            <td>Argot that has no English equivalent (or does it?)</td>
          </tr>
          <tr>
            <td>126</td>
            <td>RECENT</td>
            <td>36</td>
            <td>Compared to 1492, the</td>
            <td>90</td>
            <td>Year 2000</td>
          </tr>
          <tr>
            <td>113</td>
            <td>BUTTER</td>
            <td>43</td>
            <td>Fatty</td>
            <td>70</td>
            <td>Food</td>
          </tr>
          <tr>
            <td>131</td>
            <td>TACTIC</td>
            <td>21</td>
            <td>Strategic</td>
            <td>110</td>
            <td>Element used in fighting</td>
          </tr>
          <tr>
            <td>80</td>
            <td>REBUFF</td>
            <td>55</td>
            <td>Blunt</td>
            <td>25</td>
            <td>Turndown</td>
          </tr>
          <tr>
            <td>120</td>
            <td>MERIT</td>
            <td>82</td>
            <td>Boy Scout</td>
            <td>38</td>
            <td>Badge</td>
          </tr>
          <tr>
            <td>145</td>
            <td>DAMON</td>
            <td>95</td>
            <td>Arnette of the</td>
            <td>50</td>
            <td>NFL</td>
          </tr>
          <tr>
            <td>153</td>
            <td>SWEEP</td>
            <td>75</td>
            <td>Using a broom in sports</td>
            <td>78</td>
            <td>Events is something fans do to celebrate this</td>
          </tr>
          <tr>
            <td>164</td>
            <td>STIFFEN</td>
            <td>58</td>
            <td>After a long drive</td>
            <td>106</td>
            <td>Your joints may do this (especially if you're of old age)</td>
          </tr>
          <tr>
            <td>118</td>
            <td>POLES</td>
            <td>47</td>
            <td>Fish</td>
            <td>71</td>
            <td>Sticks?</td>
          </tr>
          <tr>
            <td>54</td>
            <td>LENVERS</td>
            <td>52</td>
            <td>French term meaning</td>
            <td>2</td>
            <td>The reverse</td>
          </tr>
          <tr>
            <td>100</td>
            <td>MADRES</td>
            <td>65</td>
            <td>On the 10th day</td>
            <td>35</td>
            <td>Of May they are celebrated in Oaxaca</td>
          </tr>
          <tr>
            <td>48</td>
            <td>PREFER</td>
            <td>31</td>
            <td>Be more</td>
            <td>17</td>
            <td>Partial to</td>
          </tr>
          <tr>
            <td>143</td>
            <td>PEARLY</td>
            <td>63</td>
            <td>Style of gates that may be fit for a</td>
            <td>80</td>
            <td>Lord</td>
          </tr>
          <tr>
            <td>84</td>
            <td>LURKER</td>
            <td>74</td>
            <td>One who watches but is not a</td>
            <td>10</td>
            <td>Participant</td>
          </tr>
          <tr>
            <td>191</td>
            <td>WORM</td>
            <td>99</td>
            <td>Night</td>
            <td>92</td>
            <td>Crawler</td>
          </tr>
          <tr>
            <td>76</td>
            <td>UNLESS</td>
            <td>16</td>
            <td>Except</td>
            <td>60</td>
            <td>When</td>
          </tr>
          <tr>
            <td>37</td>
            <td>SILENT</td>
            <td>15</td>
            <td>In a popular Christmas carol about the birth of Jesus</td>
            <td>22</td>
            <td>It describes the night</td>
          </tr>
          <tr>
            <td>59</td>
            <td>OMIT</td>
            <td>32</td>
            <td>Fail to</td>
            <td>27</td>
            <td>Mention</td>
          </tr>
          <tr>
            <td>43</td>
            <td>GERMANE</td>
            <td>13</td>
            <td>Relevant to a</td>
            <td>30</td>
            <td>Topic</td>
          </tr>
          <tr>
            <td>137</td>
            <td>ESCHER</td>
            <td>108</td>
            <td>Paradoxical</td>
            <td>29</td>
            <td>Artist</td>
          </tr>
          <tr>
            <td>151</td>
            <td>MASHIE</td>
            <td>85</td>
            <td>Potential substitute for a</td>
            <td>66</td>
            <td>Niblick</td>
          </tr>
          <tr>
            <td>163</td>
            <td>VISUAL</td>
            <td>91</td>
            <td>Of sight</td>
            <td>72</td>
            <td>And seeing</td>
          </tr>
          <tr>
            <td>132</td>
            <td>PYTHON</td>
            <td>48</td>
            <td>Programming</td>
            <td>84</td>
            <td>Language</td>
          </tr>
          <tr>
            <td>129</td>
            <td>PADRE</td>
            <td>96</td>
            <td>San Diego</td>
            <td>33</td>
            <td>Baseballer</td>
          </tr>
          <tr>
            <td>157</td>
            <td>UMPTY</td>
            <td>69</td>
            <td>Rhyming word</td>
            <td>88</td>
            <td>In a song that also features "looptid"</td>
          </tr>
          <tr>
            <td>74</td>
            <td>GULLY</td>
            <td>54</td>
            <td>Erosion's</td>
            <td>20</td>
            <td>Possible result</td>
          </tr>
          <tr>
            <td>180</td>
            <td>LIGHT</td>
            <td>107</td>
            <td>Weighing</td>
            <td>73</td>
            <td>Little</td>
          </tr>
        </tbody>
      </Table>
    </Appendix>

    <style jsx global>{`
      .crossword-grid table {
        margin-left: auto;
        margin-right: auto;
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
      .verlan-table th:nth-child(2n + 1),
      .verlan-table td:nth-child(2n + 1),
      .clues-table td:nth-child(2n + 3),
      .appendix-table th:nth-child(2n + 1),
      .appendix-table td:nth-child(2n + 1) {
        text-align: center;
      }
      .verlan-table td:nth-child(n + 2),
      .clues-table td:nth-child(-n + 2),
      .appendix-table td:nth-child(2) {
        font-family: var(--mono-font), ui-monospace, SFMono-Regular, Menlo,
          Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
      }
    `}</style>
  </Solution>
);

export default PuzzleSolution;
export const getServerSideProps = getPuzzleProps(SLUG);
