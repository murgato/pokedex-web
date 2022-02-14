import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { PokemonControllers } from "../../controllers";
import { useShallowEqualSelector } from "../../hooks/useShallowEqualSelector";
import { IPokemonState } from "../../store/pokemon/types";
import * as action from "../../store/pokemon/actions";
import "../../css/Pokemon.css";
import { addZeroes } from "../../util/functions";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Collapsed, Select, Stats, Type } from "../../components";
import { colorsTypes } from "../../util/color/colorsTypes";

const PokemonDetails = (): JSX.Element => {
  const { pokemon, informationButton, isShiny }: IPokemonState =
    useShallowEqualSelector<IPokemonState>(
      (state: IPokemonState) => state.pokemon
    );
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (name) getPokemonByName(name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  const getPokemonByName = async (name: string) => {
    if (!name) return;
    await PokemonControllers.getPreviousAndNextPokemons(name);
    await PokemonControllers.getInformationAboutPokemon(name);
  };

  const goToPageDetails = (name: string) => {
    navigate(`/PokemonDetails/${name}`);
  };

  const onChangeSelect = async (name: string) => {
    await PokemonControllers.getVarieteInfo(name, pokemon);
  };
  const onClickFlavor = async (name: string) => {
    await PokemonControllers.getFlavorAbility(name, pokemon);
  };
  return (
    <div className="body-pokemon">
      <div className="container-pokemon">
        <div className="container-button">
          <div
            className="btn-pokemon btn-left"
            onClick={() =>
              goToPageDetails(informationButton.previousPokemonName)
            }
          >
            <div className="btn-circle">
              <MdKeyboardArrowLeft className="btn-arrow" />
            </div>
            <label className="number-pokemon">
              #{addZeroes(informationButton.previousPokemonId, 3)}
            </label>
            <label className="label">
              {informationButton.previousPokemonName}
            </label>
          </div>
          <div
            className="btn-pokemon btn-right"
            onClick={() => goToPageDetails(informationButton.nextPokemonName)}
          >
            <label className="label">{informationButton.nextPokemonName}</label>
            <label className="number-pokemon">
              #{addZeroes(informationButton.nextPokemonId, 3)}
            </label>
            <div className="btn-circle">
              <MdKeyboardArrowRight className="btn-arrow" />
            </div>
          </div>
        </div>
        <div className="container-title">
          <div className="container-name">
            <label className="name-pokemon"> {pokemon?.name} </label>
            <label className="number-pokemon">
              #{addZeroes(pokemon?.id, 3)}
            </label>
          </div>
          <div className="container-types">
            {pokemon?.types.map((type, index) => {
              return (
                <div key={index}>
                  <Type
                    className="type-details-pokemon"
                    type={type}
                    colorInfo={colorsTypes}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container-half">
          <div className="half-body">
            <div className="container-switch">
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Shiny"
                  checked={isShiny}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    action.IsShiny(e.currentTarget.checked)
                  }
                />
              </Form>
            </div>
            <div className="container-select-varietie">
              {pokemon && pokemon.selectVarieties.length > 1 ? (
                <Select
                  value={pokemon.varietie}
                  className={"salect-varieties"}
                  disabled={pokemon.selectVarieties.length === 1}
                  onChange={onChangeSelect}
                  options={pokemon.selectVarieties}
                />
              ) : null}
            </div>
            <div className="container-img">
              <img
                src={
                  isShiny
                    ? pokemon?.img.front_shiny
                    : pokemon?.img.front_default
                }
                alt={pokemon?.name}
              />
            </div>
          </div>
          <div className="half-body">
            <label>{pokemon?.flavor}</label>
            <Stats stats={pokemon?.stats} />
            <label className="title-abilities">Abilities</label>
            {pokemon?.abilities?.map((ability, index) => {
              return (
                <div key={index}>
                  <Collapsed
                    title={ability.name}
                    text={ability.flavor}
                    onClick={onClickFlavor}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
