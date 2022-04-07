import React from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BattleMech, IGATOR, ITargetToHit } from "../../../../classes/battlemech";
import { IAppGlobals } from '../../../app-router';
import BattleTechLogo from '../../../components/battletech-logo';
import InputCheckbox from '../../../components/form_elements/input_checkbox';
import InputNumeric from '../../../components/form_elements/input_numeric';
import StandardModal from '../../../components/standard-modal';
import StatBar from "../../../components/stat-bar";
import BattleMechSVG from "../../../components/svg/battlemech-svg";
import DieSVG from "../../../components/svg/die-svg";
import TextSection from "../../../components/text-section";
import './play.scss';

export default class ClassicBattleTechRosterPlay extends React.Component<IPlayProps, IPlayState> {
    constructor(props: IPlayProps) {
        super(props);

        this.state = {
            updated: false,
            mechSelectorExpanded: false,

            setMovementDialog: false,
            setMovementMode: "",
            setMovementNumber: 0,
            setMovementCanJump: false,
            setMovementJumpingMP: 0,

            takeDamageDialog: false,


            setTargetDialog: false,
            targetData: null,
            viewGATOR: null,
        };

        this.props.appGlobals.makeDocumentTitle("Playing CBT Force");
    }

    

    updateTargetActive = (
      e: React.FormEvent<HTMLInputElement>,
      target: string
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      let targetData = this.state.targetData;
      if( targetData ) {
        if( target === "a" ) {
          targetData.a.active = e.currentTarget.checked;
        } else if( target === "b" ) {
          targetData.b.active = e.currentTarget.checked;
        } else if( target === "c" ) {
          targetData.c.active = e.currentTarget.checked;
        } 
      }

      this.setState({
        targetData: targetData,
      })
    }

    viewGATOR = ( 
      gator: IGATOR,
    ) => {
      this.setState({
        viewGATOR: gator,
      })
    }

    closeGATOR = (
      e: React.FormEvent<HTMLButtonElement>
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      this.setState({
        viewGATOR: null,
      })
    }

    updateTargetJumped = (
      e: React.FormEvent<HTMLInputElement>,
      target: string
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      let targetData = this.state.targetData;
      if( targetData ) {
        if( target === "a" ) {
          targetData.a.jumped = e.currentTarget.checked;
        } else if( target === "b" ) {
          targetData.b.jumped = e.currentTarget.checked;
        } else if( target === "c" ) {
          targetData.c.jumped = e.currentTarget.checked;
        } 
      }

      this.setState({
        targetData: targetData,
      })
    }

    updateTargetRange = (
      e: React.FormEvent<HTMLInputElement>,
      target: string
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      let targetData = this.state.targetData;
      if( targetData ) {
        if( target === "a" ) {
          targetData.a.range = +e.currentTarget.value;
        } else if( target === "b" ) {
          targetData.b.range = +e.currentTarget.value;
        } else if( target === "c" ) {
          targetData.c.range = +e.currentTarget.value;
        } 
      }

      this.setState({
        targetData: targetData,
      })
    }

    updateTargetOtherMods = (
      e: React.FormEvent<HTMLInputElement>,
      target: string
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      let targetData = this.state.targetData;
      if( targetData ) {
        if( target === "a" ) {
          targetData.a.otherMods = +e.currentTarget.value;
        } else if( target === "b" ) {
          targetData.b.otherMods = +e.currentTarget.value;
        } else if( target === "c" ) {
          targetData.c.otherMods = +e.currentTarget.value;
        } 
      }

      this.setState({
        targetData: targetData,
      })
    }

    updateTargetMovement = (
      e: React.FormEvent<HTMLInputElement>,
      target: string
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      let targetData = this.state.targetData;
      if( targetData ) {
        if( target === "a" ) {
          targetData.a.movement = +e.currentTarget.value;
        } else if( target === "b" ) {
          targetData.b.movement = +e.currentTarget.value;
        } else if( target === "c" ) {
          targetData.c.movement = +e.currentTarget.value;
        } 
      }

      this.setState({
        targetData: targetData,
      })
    }

    selectMech = (
      e: React.FormEvent<HTMLButtonElement>,
      uuid: string
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      if(this.props.appGlobals.currentCBTForce) {
        this.props.appGlobals.currentCBTForce.setSelectedMech( uuid );

        this.props.appGlobals.saveCurrentCBTForce( this.props.appGlobals.currentCBTForce );
      }

    }

    openSetTarget = () => {
      let currentBM: BattleMech | null = this._getCurrentBM();
      if( this.props.appGlobals.currentCBTForce && currentBM ) {
        let targetData = {
          a: JSON.parse(JSON.stringify(currentBM.getTarget("a"))),
          b: JSON.parse(JSON.stringify(currentBM.getTarget("b"))),
          c: JSON.parse(JSON.stringify(currentBM.getTarget("c"))),
        }
        this.setState({
          setTargetDialog: true,
          setMovementDialog: false,
          takeDamageDialog: false,
          targetData: targetData,
        })  
      }
      
    }
    closeSetTarget  = ( 
      e: React.FormEvent<HTMLButtonElement>
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      this.setState({
        setTargetDialog: false,
        targetData: null,
      })
    }
    setTarget = ( 
      e: React.FormEvent<HTMLButtonElement>
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      let currentBM: BattleMech | null = this._getCurrentBM();
      if( this.props.appGlobals.currentCBTForce && currentBM && this.state.targetData ) {
        currentBM.setTargets( 
          this.state.targetData.a, 
          this.state.targetData.b,
          this.state.targetData.c,
        );

        this.props.appGlobals.saveCurrentCBTForce( this.props.appGlobals.currentCBTForce );
      }

      this.setState({
        setTargetDialog: false,
        targetData: null,
      })
    }

    openTakeDamage = () => {
      this.setState({
        takeDamageDialog: true,
        setMovementDialog: false,
        setTargetDialog: false,
      })
    }
    closeTakeDamage  = ( 
      e: React.FormEvent<HTMLButtonElement>
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      this.setState({
        takeDamageDialog: false,
      })
    }
    takeDamage = ( 
      e: React.FormEvent<HTMLButtonElement>
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      this.setState({
        takeDamageDialog: false,
      })
    }

    _getCurrentBM = (): BattleMech | null => {
      if( this.props.appGlobals && this.props.appGlobals.currentCBTForce ) {
          return this.props.appGlobals.currentCBTForce.getSelectedMech();
      }
      return null;
    }

    onChange = (nv: BattleMech ): void => {
      let currentBM: BattleMech | null = this._getCurrentBM();
      if( this.props.appGlobals.currentCBTForce && currentBM ) {
        console.log("onChange called")
        currentBM = nv;
        this.props.appGlobals.saveCurrentCBTForce( this.props.appGlobals.currentCBTForce );
      }
    }

    openSetMovement = () => {

      let currentBM: BattleMech | null = this._getCurrentBM();
      this.setState({
        setMovementDialog: true,
        setMovementMode: currentBM ? currentBM.currentMovementMode : "",
        setMovementNumber: currentBM ? currentBM.currentToHitMovementModifier : 0,
        setMovementCanJump: currentBM && currentBM.getJumpSpeed() > 0 ? true : false,
        setTargetDialog: false,
        takeDamageDialog: false,
      })
    }
    closeSetMovement  = ( 
      e: React.FormEvent<HTMLButtonElement>
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      this.setState({
        setMovementDialog: false,
      })
    }
    setMovement = ( 
      e: React.FormEvent<HTMLButtonElement>
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      let currentBM: BattleMech | null = this._getCurrentBM();
      if( this.props.appGlobals.currentCBTForce && currentBM ) {
        currentBM.currentMovementMode = this.state.setMovementMode;
        currentBM.currentToHitMovementModifier = this.state.setMovementNumber;
        if( currentBM.currentMovementMode === "j")
          currentBM.currentTargetJumpingMP = this.state.setMovementJumpingMP;
        else 
          currentBM.currentTargetJumpingMP = 0
        this.props.appGlobals.saveCurrentCBTForce( this.props.appGlobals.currentCBTForce );
      }

      this.setState({
        setMovementDialog: false,
      })
    }

    setMovementMode = (
      e: React.FormEvent<HTMLButtonElement>,
      nv: string 
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
      this.setState({
        setMovementMode: nv,
      })
    }

    setMovementNumber = (
      e: React.FormEvent<any>,
      nv: number 
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      let setMovementJumpingMP = 0;
      if( nv > 5 ) {
        setMovementJumpingMP = 25
      } else if( nv > 4 ) {
        setMovementJumpingMP = 18
      } else if( nv > 3 ) {
        setMovementJumpingMP = 10
      } else if( nv > 2 ) {
        setMovementJumpingMP = 7
      } else if( nv > 1 ) {
        setMovementJumpingMP = 5
      } else if( nv > 0 ) {
        setMovementJumpingMP = 3
      }
      this.setState({
        setMovementNumber: nv,
        setMovementJumpingMP: setMovementJumpingMP,
      })
    }

    updateMovementJumpingMP = (
      e: React.FormEvent<HTMLInputElement>,
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }

      let setMovementNumber = 0;
      if( +e.currentTarget.value >= 25 ) {
        setMovementNumber = 6
      } else if( +e.currentTarget.value >= 18 ) {
        setMovementNumber = 5
      } else if( +e.currentTarget.value >= 10 ) {
        setMovementNumber = 4
      } else if( +e.currentTarget.value >= 7 ) {
        setMovementNumber = 3
      } else if( +e.currentTarget.value >= 5 ) {
        setMovementNumber = 2
      } else if( +e.currentTarget.value >= 3 ) {
        setMovementNumber = 1
      }

      this.setState({
        setMovementJumpingMP: +e.currentTarget.value,
        setMovementNumber: setMovementNumber,
      })
    }


    closeTargetDialog = (
      e: React.FormEvent<HTMLButtonElement>,
    ) => {
      if( e && e.preventDefault ) {
        e.preventDefault();
      }
    }

    render = (): React.ReactFragment => {
      if(!this.props.appGlobals.currentCBTForce) {
        return <></>;
      }
      let selectedMech: BattleMech | null = this.props.appGlobals.currentCBTForce.getSelectedMech();
      return (
        <>

<StandardModal
  show={this.state.viewGATOR ? true : false}
  onClose={this.closeGATOR}
>
  {this.state.viewGATOR ? (
    <table className="table text-center">
      <thead>
        {this.state.viewGATOR.weaponName ? (
          <tr>
            <th colSpan={5}>GATOR for {this.state.viewGATOR.weaponName}</th>
            
          </tr>
        ) : null}
        <tr>
          <th>G</th>
          <th>A</th>
          <th>T</th>
          <th>O</th>
          <th>R</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{this.state.viewGATOR.gunnerySkill}</td>
          <td>{this.state.viewGATOR.attackerMovementModifier}</td>
          <td>{this.state.viewGATOR.targetMovementModifier}</td>
          <td>{this.state.viewGATOR.otherModifiers}</td>
          <td>{this.state.viewGATOR.rangeModifier}</td>
        </tr>
      </tbody>
    </table>
  ) : null}
</StandardModal>
<StandardModal
  show={this.state.setMovementDialog}
  onClose={this.closeSetMovement}
  onSave={this.setMovement}
>

    <div className="row">
      <div className="col text-center">
      <button
        className={this.state.setMovementMode === "" ? "btn btn-primary" : "btn"}
        onClick={(e) => this.setMovementMode(e, "")}
      >
    <svg
      width={40}
      height={40}
      >
      <DieSVG
        posX={0}
        posY={0}
        width={40}
        bgColor="#009"
        pipColor="white"
        numberPips={0}
      />
      </svg><br />
      Stationary
      </button>
      <br />
      <button
        className={this.state.setMovementMode === "w" ? "btn btn-primary" : "btn"}
        onClick={(e) => this.setMovementMode(e, "w")}
      >
    <svg
      width={40}
      height={40}
      >
      <DieSVG
        posX={0}
        posY={0}
        width={40}
        bgColor="white"
        pipColor="black"
        numberPips={1}
      />
      </svg><br />
      Walk
      </button>
      <br />
    <button
        className={this.state.setMovementMode === "r" ? "btn btn-primary" : "btn"}
        onClick={(e) => this.setMovementMode(e, "r")}
      >
    <svg
      width={40}
      height={40}
      >
    <DieSVG
        posX={0}
        posY={0}
        width={40}
        bgColor="black"
        pipColor="white"
        numberPips={2}
      />
      </svg><br />
      Run
      </button>
      <br />
    {this.state.setMovementCanJump ? (
      <>
    <button
        className={this.state.setMovementMode === "j" ? "btn btn-primary" : "btn"}
        onClick={(e) => this.setMovementMode(e, "j")}
      >
      <svg
      width={40}
      height={40}
      >
    <DieSVG
        posX={0}
        posY={0}
        width={40}
        bgColor="red"
        pipColor="white"
        numberPips={3}
      />
      </svg><br />
      Jump
      </button>
      </>
    ) : null}
    
      </div>
      <div className="col">
        <table className="table text-center">
          <thead>
            <tr>
              <th colSpan={2}>
                Movement Modifier Table
              </th>
            </tr>

            <tr>
              <th>Move (hexes)</th>
              <th>Mod</th>
            </tr>
          </thead>
          <tbody className={this.state.setMovementNumber === 0 ? "highlighted" : ""}>
            <tr className="cursor-pointer" onClick={(e) => this.setMovementNumber(e, 0)}>
              <td>0-2</td>
              <td>0</td>
            </tr>
          </tbody>
          <tbody className={this.state.setMovementNumber === 1 ? "highlighted" : ""}>
            <tr className="cursor-pointer" onClick={(e) => this.setMovementNumber(e, 1)}>
              <td>3-4</td>
              <td>+1</td>
            </tr>
            </tbody>
            <tbody className={this.state.setMovementNumber === 2 ? "highlighted" : ""}>
            <tr className="cursor-pointer" onClick={(e) => this.setMovementNumber(e, 2)}>
              <td>5-6</td>
              <td>+2</td>
            </tr>
            </tbody>
            <tbody className={this.state.setMovementNumber === 3 ? "highlighted" : ""}>
            <tr className="cursor-pointer" onClick={(e) => this.setMovementNumber(e, 3)}>
              <td>7-9</td>
              <td>+3</td>
            </tr>
            </tbody>
            <tbody className={this.state.setMovementNumber === 4 ? "highlighted" : ""}>
            <tr className="cursor-pointer" onClick={(e) => this.setMovementNumber(e, 4)}>
              <td>10-17</td>
              <td>+4</td>
            </tr>
            </tbody>
          <tbody className={this.state.setMovementNumber === 5 ? "highlighted" : ""}>
            <tr className="cursor-pointer" onClick={(e) => this.setMovementNumber(e, 5)}>
              <td>18-24</td>
              <td>+5</td>
            </tr>
            </tbody>
          <tbody className={this.state.setMovementNumber === 6 ? "highlighted" : ""}>
            <tr className="cursor-pointer" onClick={(e) => this.setMovementNumber(e, 6)}>
              <td>25+</td>
              <td>+6</td>
            </tr>
          </tbody>
          {this.state.setMovementMode === "j" ? (
            <tfoot>
              <tr>
                <th colSpan={2} className="small-text">
                  Jump bonus will be be included on in-play sheet
                </th>
              </tr>
            </tfoot>
          ) : null}
        </table>
      </div>
      {this.state.setMovementMode === "j" ? (
        <div className="text-center">
        <InputNumeric 
          label="Jumping MP Used (for heat calculation)"
          value={this.state.setMovementJumpingMP}
          onChange={this.updateMovementJumpingMP}
          description="Changing this will also set the movement modifer above, so you don't have to perform two clicks."
          inline={true}
          min={0}
          max={30}
          step={1}
        />
        </div>
      ) : null}
      
      
  </div>
</StandardModal>
<StandardModal
  show={this.state.setTargetDialog}
  onClose={this.closeSetTarget}
  onSave={this.setTarget}
>
  {this.state.targetData ? (
    <>
      <fieldset className="fieldset">
        <legend>Target A</legend>
        <div className="row">
          <div className="col">
            <InputCheckbox
              label="Active"
              checked={this.state.targetData.a.active}
              description='Whether this target slot is active. Unchecking will keep it from being cycled in the Equipment button'
              onChange={(e) => this.updateTargetActive(e, "a")}
            />
          </div>
          <div className="col">

          <InputNumeric
          label="Movement Mod"
          description='Your opponent will tell you this'
          value={this.state.targetData.a.movement}
          onChange={(e) => this.updateTargetMovement(e, "a")}
          step={1}
          min={0}
          max={50}
          inline={true}
        />

        <InputNumeric
          label="Other Mods"
          description='Trees, Water, other cover, etc'
          value={this.state.targetData.a.otherMods}
          onChange={(e) => this.updateTargetOtherMods(e, "a")}
          step={1}
          inline={true}
          min={0}
          max={50}
        />
        <InputNumeric
          label="Range"
          description='The number of hexes between your target'
          value={this.state.targetData.a.range}
          onChange={(e) => this.updateTargetRange(e, "a")}
          step={1}
          inline={true}
          min={0}
          max={50}
        />
          </div>
        </div>

      </fieldset>
      <fieldset className="fieldset">
        <legend>Target B</legend>
        <div className="row">
          <div className="col">
            <InputCheckbox
              label="Active"
              description='Whether this target slot is active. Unchecking will keep it from being cycled in the Equipment button'
              checked={this.state.targetData.b.active}
              onChange={(e) => this.updateTargetActive(e, "b")}
            />
          </div>
          <div className="col">

          <InputNumeric
          label="Movement Mod"
          description='Your opponent will tell you this'
          value={this.state.targetData.b.movement}
          onChange={(e) => this.updateTargetMovement(e, "b")}
          step={1}
          min={0}
          max={50}
          inline={true}
        />

        <InputNumeric
          label="Other Mods"
          description='Trees, Water, other cover, etc'

          value={this.state.targetData.b.otherMods}
          onChange={(e) => this.updateTargetOtherMods(e, "b")}
          step={1}
          inline={true}
          min={0}
          max={50}
        />
        <InputNumeric
          label="Range"
          description='The number of hexes between your target'
          value={this.state.targetData.b.range}
          onChange={(e) => this.updateTargetRange(e, "b")}
          step={1}
          inline={true}
          min={0}
          max={50}
        />
          </div>
        </div>

      </fieldset>
      <fieldset className="fieldset">
        <legend>Target C</legend>
        <div className="row">
          <div className="col">
            <InputCheckbox
              label="Active"
              description='Whether this target slot is active. Unchecking will keep it from being cycled in the Equipment button'
              checked={this.state.targetData.c.active}
              onChange={(e) => this.updateTargetActive(e, "c")}
            />
          </div>
          <div className="col">

          <InputNumeric
          label="Movement Mod"
          description='Your opponent will tell you this'
          value={this.state.targetData.c.movement}
          onChange={(e) => this.updateTargetMovement(e, "c")}
          step={1}
          min={0}
          max={50}
          inline={true}
        />

        <InputNumeric
          label="Other Mods"
          description='Trees, Water, other cover, etc'

          value={this.state.targetData.c.otherMods}
          onChange={(e) => this.updateTargetOtherMods(e, "c")}
          step={1}
          inline={true}
          min={0}
          max={50}
        />
        <InputNumeric
          label="Range"
          description='The number of hexes between your target'
          value={this.state.targetData.c.range}
          onChange={(e) => this.updateTargetRange(e, "c")}
          step={1}
          inline={true}
          min={0}
          max={50}
        />
          </div>
        </div>

      </fieldset>
    </>
  ) : null}

</StandardModal>
<StandardModal
  show={this.state.takeDamageDialog}
  onClose={this.closeTakeDamage}
  onSave={this.takeDamage}
>
        Take Damage Dialog
</StandardModal>
          <header className="topmenu">
            <ul className="main-menu">
                <li><Link title="Click here to leave Play Mode (don't worry, you won't lose your current mech statuses)" className="current" to={`${process.env.PUBLIC_URL}/classic-battletech/roster`}><FaArrowCircleLeft /></Link></li>
                {/* <li>
                  <span
                    
                  >
                    <FaBars />
                  </span>
                </li> */}
                                <li className="small-text text-center">
                                <br />
                    No, nothing works here yet (except current selection).<br />
                    This is basically a big mockup using your current force.
                  
                      
                </li>
                <li className="logo">
                    <a
                        href="https://battletech.com"
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Click here to go to the official BattleTech website!"
                    >
                        <BattleTechLogo />
                    </a>
                </li>
            </ul>

          </header>

<div className="postion-relative">

  <div className={this.state.mechSelectorExpanded ? "mech-selector" : "mech-selector expanded"}>
          {this.props.appGlobals.currentCBTForce.groups.map( (group, groupIndex) => {
            if( group.members.length === 0) {
              return (<></>);
            }
            return (
              <React.Fragment key={groupIndex}>
              <div>
                  <div className="lance-name">{group.getName(groupIndex)}</div>
                  <ul className="mech-list">
                  {group.members.map( (unit, unitIndex) => {
                    let dieBG = "#009";
                    let dieFG = "white";
                    let diePips = unit.currentToHitMovementModifier;

                    if( unit.currentMovementMode === "w" ) {
                      dieBG = "white";
                      dieFG = "black";
                    }
                    if( unit.currentMovementMode === "r" ) {
                      dieBG = "black";
                      dieFG = "white";
                    }
                    if( unit.currentMovementMode === "j" ) {
                      dieBG = "red";
                      dieFG = "white";
                      diePips++;
                    }

                    return (
                        <li key={unitIndex}>
                          <button
                            onClick={(e) => this.selectMech(e, unit.uuid)}
                            className={selectedMech && selectedMech.uuid === unit.uuid ? "btn btn-sm btn-primary full-width" : "btn btn-sm btn-secondary full-width"}
                          >
                            {unit.getName()}

                            <div className="stats">
                              <div 
                                className="move"
                                title="This is the mech's movement status, the color indicates the last movement method, the number is the to-hit movement modifiers as a target including the +1 jump modifier if the 'mech jumped."
                              >
                                <svg
                                  height={20}
                                  width={20}
                                  
                                >
                                  <DieSVG
                                    posX={0}
                                    posY={0}
                                    width={20}
                                    bgColor={dieBG}
                                    pipColor={dieFG}
                                    numberPips={diePips}
                                    numericPips={true}
                                  />
                                </svg>
                               
                              </div>
                              <div className="bars">
                                <StatBar 
                                  color="black"
                                  background="#aaa"
                                  currentPercentage={30}
                                  height={8}
                                  title="Current Armor Status"
                                />
                                <StatBar 
                                  color="white"
                                  background="#aaa"
                                  currentPercentage={50}
                                  height={8}
                                  title="Current Internal Structure Status"
                                />
                                <StatBar 
                                  color="red"
                                  background="#aaa"
                                  currentPercentage={80}
                                  height={8}
                                  title="Current Heat Status"
                                />
                              </div>
                            </div>

                          </button>
                        </li>
                    )
                  })}
                  </ul>



              </div>


            </React.Fragment>
            )
          })} 
    </div>
    <div className="selected-mech">
          {selectedMech ? (
              <BattleMechSVG
                mechData={selectedMech}
                inPlay={true}
                openSetTarget={this.openSetTarget}
                openTakeDamage={this.openTakeDamage}
                openSetMovement={this.openSetMovement}
                onChange={this.onChange}
                viewGATOR={this.viewGATOR}
              />
          ) : (
            <div className="text-center">
              <TextSection>
                (No Selected 'Mech)
              </TextSection>
            </div>
          )}
            </div>
            </div>            
        </>
      );
    }
}

interface IPlayProps {
  appGlobals: IAppGlobals;

}

interface IPlayState {
  updated: boolean;
  mechSelectorExpanded: boolean;

  setMovementDialog: boolean;
  setMovementMode: string;
  setMovementNumber: number;
  setMovementCanJump: boolean;
  setMovementJumpingMP: number;

  takeDamageDialog: boolean;


  setTargetDialog: boolean;

  targetData: ICombinedTargetData | null;
  viewGATOR: IGATOR | null;
}

interface ICombinedTargetData {
  a: ITargetToHit;
  b: ITargetToHit;
  c: ITargetToHit;
}
