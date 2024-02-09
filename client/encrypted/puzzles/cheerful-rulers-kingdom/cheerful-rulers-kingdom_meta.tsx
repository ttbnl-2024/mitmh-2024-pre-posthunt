import { FC } from 'react';

import { Monospace } from 'components/copy';
import Table from 'components/table';

const CrkMeta: FC<{}> = () => {
  return (
    <>
      <h3>White Lily's Metapuzzle: A Half-Baked Scheme</h3>
      <p>
        White Lily has made multiple failed attempts at preparing the dough of a
        "perfect cookie" by using the ingredients from two cookies. Her research
        into the traits of perfect cookies has been left half-baked, as if
        crucial pieces of info were missing. Perhaps the notes gathered during
        the course of Hollyberry's puzzle event will be of use.
      </p>
      <h4 className="my-2">Failed experiments:</h4>
      <Table>
        <tbody>
          <tr>
            <td>
              <Monospace>_ __|__ _____ __ ___</Monospace>
            </td>
            <td>
              <Monospace>_ _ 11 _ _ | _ 7 _ _ / _ 5 _ _ _</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>____ __|__ _____ _____</Monospace>
            </td>
            <td>
              <Monospace>_ _ 8 _ _ _ 4 | 13 _ _ _ _ 6 _ _ _</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>_______ |___ ____ ____</Monospace>
            </td>
            <td>
              <Monospace>_ _ _ _ 12 _ | 1 _ 10 _ _ _ _</Monospace>
            </td>
          </tr>
          <tr>
            <td>
              <Monospace>____ ______ |________</Monospace>
            </td>
            <td>
              <Monospace>_ _ 9 _ _ 2 _ _ _ | 3 _ _ _ _ _ 14 _</Monospace>
            </td>
          </tr>
        </tbody>
      </Table>
      <h4 className="my-2">Trait research schematics:</h4>
      <ul>
        <li>
          <Monospace>PV1. -1 [33 26 20]</Monospace>
        </li>
        <li>
          <Monospace>PV2. +4, where? [44 30 48 32 07 39 15 27 09]</Monospace>
        </li>
        <li>
          <Monospace>HB1. Last word [28 17 18 22 01 34 23 43 10]</Monospace>
        </li>
        <li>
          <Monospace>HB2. First word [04 13 40 14]</Monospace>
        </li>
        <li>
          <Monospace>DC1. First word [11 31 02 25 19]</Monospace>
        </li>
        <li>
          <Monospace>DC2. Building's last word [36 47 06 38 46]</Monospace>
        </li>
        <li>
          <Monospace>GC1. EXORBITANTLY [35 12 41 21 / 45 24 03 08]</Monospace>
        </li>
        <li>
          <Monospace>GC2. EXORCISMS [29 16 37 05 42]</Monospace>
        </li>
      </ul>
      <p className="text-center">
        <Monospace>
          <span className="whitespace-nowrap">01-02-03-04-05-06-07</span> /{' '}
          <span className="whitespace-nowrap">08-09-10</span> /{' '}
          <span className="whitespace-nowrap">11-12-13-14-15-16</span> /{' '}
          <span className="whitespace-nowrap">17-18-19</span> /{' '}
          <span className="whitespace-nowrap">20-21-22</span> /{' '}
          <span className="whitespace-nowrap">23-24-25-26'27</span> /{' '}
          <span className="whitespace-nowrap">28-29-30-31-32-33-34-35-36</span>.
          / <span className="whitespace-nowrap">37-38-39-40-41-42</span> /{' '}
          <span className="whitespace-nowrap">43-44-45-46-47-48</span>.
        </Monospace>
      </p>
      <p>
        <b>What trait of a "perfect cookie" is White Lily searching for?</b>
      </p>
    </>
  );
};

export default CrkMeta;
